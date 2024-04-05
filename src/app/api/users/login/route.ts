'use server'
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";
import { connectToDb } from "@/dbConfig/dbConfig";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

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

        const tokenData = {
            id: user._id,
            name: user.name
        }

        const token = jwt.sign(tokenData, process.env.JWT_SECRET!, { expiresIn: '1d' });

        const response = NextResponse.json({
            success: true,
            message: "User login successfully",
            status: 200
        })

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: true
        });

        return response;


    } catch (error) {
        return NextResponse.json({ error: "Something went wrong in login" }, { status: 404 })
    }
}