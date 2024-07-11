import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/news`);
    const news = await res.json();
    return NextResponse.json(news,{status : 200})
}