import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";
import { connectToDb } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connectToDb();

export function POST(request: NextRequest) {
    // extract data from token
    const userId = getDataFromToken(request);
    const user = User.findOne({ _id: userId }).select("-password");

    return NextResponse.json({ status: 200, message: "User find successfully", user })
}