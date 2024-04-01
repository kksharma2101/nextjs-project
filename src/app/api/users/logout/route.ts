import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const respone = NextResponse.json({
        message: "User logout successfully",
        success: true
    })

    respone.cookies.set("token", "", {
        httpOnly: true,
        expires: new Date(0)
    })
    return respone;
}