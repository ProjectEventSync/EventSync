"use client";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {cookies} from "next/headers";

export async function middleware(request: NextRequest) {
    const token = cookies().get("token");

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard', '/signout', '/friends', '/meetups', '/notifications', '/settings'],
}