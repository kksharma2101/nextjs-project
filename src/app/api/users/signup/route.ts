import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";
import { connectToDb } from "@/dbConfig/dbConfig";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helpers/mailHelper";

connectToDb();

export async function POST(reqest: NextRequest) {
    try {
        const { userName, email, password } = await reqest.json();
        // const { userName, email, password } = reqBody;

        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ error: "Email is already exists" }, { status: 500 })
        }

        // password bcrypt
        const passwordSalt = await bcrypt.genSalt(8);
        const passwordHash = await bcrypt.hash(password, passwordSalt);

        const addUser = new User({
            userName,
            email,
            password: passwordHash
        });

        const saveUser = await addUser.save();
        console.log(saveUser);

        // send verification email 
        await sendEmail({ email, emailType: "VERIFY", userId: saveUser._id });

        return NextResponse.json({
            status: 202,
            message: "User registerd successfully",
            saveUser
        });



    } catch (error) {
        return NextResponse.json({ error: "Something went wrong in signup" }, { status: 404 })
    }
};