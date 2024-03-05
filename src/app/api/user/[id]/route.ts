import {NextRequest, NextResponse} from "next/server";
import { getUser } from "@/db/read/user";
import { updateUser } from "@/db/update/user";
import { deleteUser } from "@/db/delete/user";
import {headers} from "next/headers";
import verifyJWT from "@/app/api/utils/verifyJWT";
import {User} from "@/types";

export async function GET(request: NextRequest, { params } : {params: {id: string}}) {
    // Make sure request is authorized
    const headersInstance = headers()
    const authorization = headersInstance.get('authorization');
    const data = verifyJWT(authorization);
    if ("error" in data) {
        return NextResponse.json({error: data.error})
    }
    if (data.type == "api"){
        // Do additional checks for scopes
    }
    const user = await getUser(params.id, undefined, undefined); // Get user data by ID (user param is the user's ID)

    if (!user) {
        return NextResponse.json({error: 'User not found'});
    }

    return NextResponse.json(user.toJSON()); // Return user data as JSON
}

export async function PUT(request: NextRequest, { params } : {params: {id: string}}) {
    const updateData = await request.json(); // Get user data from request body
    const user = await getUser(params.id); // Get user data by ID (user param is the user's ID)

    if (!user) {
        return NextResponse.json({error: 'User not found'});
    }

    await updateUser(user._id, updateData); // Update user in database
    const updatedUser = await getUser(params.id);

    if (!updatedUser) {
        return NextResponse.json({error: 'User not found'});
    }
    return NextResponse.json(updatedUser.toJSON()); // Return updated user data as JSON
}

export async function DELETE(request: NextRequest, { params } : {params: {id: string}}) {
    const user = await getUser(params.id); // Get user data by ID (user param is the user's ID)

    if (!user) {
        return NextResponse.json({error: 'User not found'});
    }

    await deleteUser(user._id); // Delete user from database

    return NextResponse.json({ status: "successful" }); // Return success message as JSON
}