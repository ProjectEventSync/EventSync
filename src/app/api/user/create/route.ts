import {NextRequest, NextResponse} from "next/server";
import { createUser } from "@/db/create/user";
import { User } from "@/types";
import {headers} from "next/headers";
import verifyJWT from "@/app/api/utils/verifyJWT";

export async function POST(request: NextRequest) {
    const headersInstance = headers()
    const authorization = headersInstance.get('authorization');
    const data = verifyJWT(authorization);

    if ("error" in data) {
        return NextResponse.json({error: data.error})
    }
    if (data.type == "api"){
        // Do additional checks for scopes
    }

    const userData = await request.json(); // Get user data from request body
    const user = new User(userData); // Create new user object from data
    await createUser(user); // Create user in database
    return NextResponse.json(user.toJSON()); // Return user data as JSON
}