import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";
import { connectToDb } from "@/dbConfig/dbConfig";
import bcrypt from 'bcrypt';
import JWT from "jsonwebtoken";

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({
                message: "User is not exists, try again"
            })
        }

        const match = await bcrypt.compare(password, user.password)

        if (!match) {
            return NextResponse.json({
                message: "User password is not match, try again"
            })
        }
        // await JWT.

        return NextResponse.json({
            success: true,
            message: "User login successfully",
            status: 200
        })


    } catch (error) {
        return NextResponse.json({ error: "Something went wrong in login" }, { status: 404 })
    }
}