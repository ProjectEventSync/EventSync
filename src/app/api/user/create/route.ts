import {NextRequest, NextResponse} from "next/server";
import { createUser } from "@/db/create/user";
import { User } from "@/types";

export async function POST(request: NextRequest) {
    const userData = await request.json(); // Get user data from request body
    const user = User.fromJSON(userData); // Create new user object from data
    await createUser(user); // Create user in database
    return NextResponse.json(user.toJSON()); // Return user data as JSON
}