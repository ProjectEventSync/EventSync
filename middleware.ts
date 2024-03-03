import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const currentUID = request.cookies.get('_id')?.value

    if (request.url in ['/dashboard', '/signout', '/friends', '/meetups', '/notifications', '/settings'] || request.url.includes('/meetups')) {
        if (!currentUID) {
            return NextResponse.redirect(new URL('/login', request.url))
        }

    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}