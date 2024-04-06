import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";
import { connectToDb } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connectToDb();

export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({ _id: userId }).select("-password");
        // console.log(user)
        console.log("check me")

        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}