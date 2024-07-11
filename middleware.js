import { NextResponse } from "next/server";

export function middleware(request) {
    let headers = new Headers(request.headers);
    if (headers.get('api-key') === process.env.NEXT_PUBLIC_API_KEY) {
        return NextResponse.next();
    }

    return NextResponse.json({
        message : "You don't have access to this api"
    }, {
        status : 401
    });
}

export const config = {
    matcher: '/api/:path*',
}