import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";
import { connectToDb } from "@/dbConfig/dbConfig";

export async function POST(request: NextRequest) {
    try {
        const token = await request.json();
        // const { token } = reqBody;
        console.log(token)

        const user = await User.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } });

        if (!user) {
            return NextResponse.json({
                message: "token is not validate, try again"
            })
        }
        console.log(user)
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;

        await user.save();

        return NextResponse.json({
            success: true,
            message: "User verify successfully",
            status: 200
        })

    } catch (error) {
        return NextResponse.json({
            success: false,
            status: 505,
            message: "User email is not verified",
            error
        })
    }
}