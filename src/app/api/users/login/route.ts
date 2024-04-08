import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";
import { connectToDb } from "@/dbConfig/dbConfig";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
// import { cookies } from "next/headers";

connectToDb();

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({
                message: "User is not found, try another"
            })
        }
        const match = await bcrypt.compare(password, user.password)

        if (!match) {
            return NextResponse.json({
                message: "User password is not match, try again"
            })
        }

        const token = jwt.sign({
            data: user._id
        }, process.env.JWT_SECRET!, { expiresIn: '8h' });

        const response = NextResponse.next()
        // .json({
        //     success: true,
        //     message: "User login successfully",
        //     status: 200
        // })
        // cookies().set('token', token)

        response.cookies.set("token", token, {
            httpOnly: true,

        })

        return response;

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Something went wrong in login" }, { status: 404 })
    }
}