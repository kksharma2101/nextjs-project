import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";
import { connectToDb } from "@/dbConfig/dbConfig";
import bcrypt from 'bcrypt';
import { sendEmail } from "@/helpers/mailHelper";


export async function POST(reqest: NextRequest) {
    try {
        const reqBody = reqest.json();
        const { userName, email, password } = reqBody;

        const user = User.findOne({ email });

        if (email) {
            return NextResponse.json({ error: "Email is already exists" }, { status: 500 })
        }

        // password bcrypt
        const passwordSalt = await bcrypt.genSalt(8);
        const passwordHash = await bcrypt.hash(password, passwordSalt);

        const addUser = new User({
            userName,
            email,
            password: passwordHash
        })

        const saveUser = await addUser.save();
        console.log(saveUser);

        // send verification email 
        await sendEmail({ email, emailType: "VERIFIY", userId: saveUser._id });

        NextResponse.json({
            status: 404,
            message: "User registerd successfully",
            saveUser
        })



    } catch (error) {
        return NextResponse.json({ error: "Something went wrong in signup" }, { status: 404 })
    }
}