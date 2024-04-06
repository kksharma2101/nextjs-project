import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function getDataFromToken(request: NextRequest) {
    try {
        const token = cookies().get("token")?.value || "";
        console.log(token)
        console.log("first")
        const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
        console.log(decodedToken)
        return decodedToken.id;
    } catch (error: any) {
        return NextResponse.json({ status: 404, message: "Error in get data from token" })
    }
}