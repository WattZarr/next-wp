import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.status(200).json({message : "hello"})
}