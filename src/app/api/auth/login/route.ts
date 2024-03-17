import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { NextRequest, NextResponse } from 'next/server';
import { getUser } from '@/db/read/user';
import jwt from "jsonwebtoken";
import checkPassword  from '@/app/api/utils/checkPassword';

export async function POST(request: NextRequest) {
    const {username, password} = await request.json();

    let user = await getUser({email: username}); // Check if email exists

    if (!user) {
        user = await getUser({username}); // Check if username exists

        if (!user) {
            return NextResponse.json({ "error": "User not found" }); // If neither email nor username exists, return error
        }
    }

    const hashedPassword = user.password; //get pass

    const passwordMatch = await checkPassword(password, hashedPassword); //pass check
    if (!passwordMatch) {
        return NextResponse.json({ "error": "Password incorrect" });
    }

    // Ensure JWT_SECRET is defined
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }

    // Generate JWT token
    const token = jwt.sign({ userID: user._id, type: 'user' }, process.env.JWT_SECRET, {
        expiresIn: '100m',
    });

    return NextResponse.json({ "token": token });
}
