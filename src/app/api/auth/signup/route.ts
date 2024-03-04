// TODO: Implement API routes for singup - POST (create)
// Same as POST to user, but also changes session data
// Import 'dotenv' at the top of your file
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import {NextRequest, NextResponse} from "next/server";
import jwt from 'jsonwebtoken';
import {createUser} from "@/db/create/user";
import {getUser} from "@/db/read/user";
import {User} from "@/types";
import hashPassword from "@/app/api/utils/hashPassword";

export async function POST(request: NextRequest) {
    const {email, username, password} = await request.json();


    const user = await getUser(undefined, email, undefined);

    if (user) {
        return NextResponse.json({"error": 'Email already exists'});
    }
    const user2 = await getUser(undefined, undefined, username);

    if (user2) {
        return NextResponse.json({"error": 'Username already exists'});
    }

    let hashedPassword = await hashPassword(password);
    console.log(hashedPassword);
    const newUser = await createUser(User.fromJSON({email, username, hashedPassword}));

    // Ensure JWT_SECRET is defined
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }
    // Token can be either user or API token
    // User token gives access to user data
    // API token gives access to API routes (with scopes) - not implemented
    const token = jwt.sign({ userID: newUser._id, type: 'user' }, process.env.JWT_SECRET, {
        expiresIn: '100m',
    });
    return NextResponse.json({ "token": token });
}