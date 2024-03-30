import Jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function getDataFromToken(request: NextRequest) {
    try {
        const token = request.cookies.get("token")?.value || "";

        const decodedToken: any = Jwt.verify(token, process.env.JWT_SECRET!)

        return decodedToken.id;

    } catch (error: any) {
        // return NextResponse.json({ status: 404, message: "Error in get data from token" })
        throw new Error(error.message);

    }
}