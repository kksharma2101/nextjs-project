import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";
import { connectToDb } from "@/dbConfig/dbConfig";

export async function POST(reqest: NextRequest) {
    try {
        
    } catch (error) {
       console.log("Error in signup:" + error)
    }
}