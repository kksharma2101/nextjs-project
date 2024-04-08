import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function getDataFromToken(request: NextRequest) {
    try {
        const token = cookies().get("token")?.value || "";
        const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET!);

        return decodedToken.data;
    } catch (error: any) {
        return NextResponse.json({ status: 404, message: "Error in get data from token" })
    }
}