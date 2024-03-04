import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Cookies from 'js-cookie';

export async function middleware(request: NextRequest) {
    const token = Cookies.get('token');


    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard', '/signout', '/friends', '/meetups', '/notifications', '/settings', '/meetups/*'],
}