// TODO: Implement API routes for login - POST (create)
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import {NextRequest, NextResponse} from 'next/server';
import {getUser} from '@/db/read/user';
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
    const {username, password} = await request.json();

    let user = await getUser(undefined, username); // Check if email exists

    if (!user) {
        user = await getUser(undefined, undefined, username); // Check if username exists

        if (!user) {
            return NextResponse.json({"error": "User not found"}); // If neither email nor username exists, return error
        }
    }

    // TODO: Implement password hashing and password checking @Gam3rr
    if (user.password !== password) {
        return NextResponse.json({"error": "Password incorrect"})
    }

    // Ensure JWT_SECRET is defined
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }

    const token = jwt.sign({ userID: user._id, type: 'user' }, process.env.JWT_SECRET, {
        expiresIn: '100m',
    })

    return NextResponse.json({ "token": token });
}