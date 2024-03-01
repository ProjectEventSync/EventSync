// TODO: Implement API routes for user - GET (read), PUT (update), DELETE (delete)

import {NextRequest, NextResponse} from "next/server";
import { getUser } from "@/db/read/user";
import { updateUser } from "@/db/update/user";
import { deleteUser } from "@/db/delete/user";

export async function GET({ params } : {params: {user: string}}) {
    const user = await getUser(params.user); // Get user data by ID (user param is the user's ID)

    if (!user) {
        return new Error("User not found");
    }

    return NextResponse.json(user.toJSON()); // Return user data as JSON
}

export async function PUT(request: NextRequest, { params } : {params: {user: string}}) {
    const updateData = await request.json(); // Get user data from request body
    const user = await getUser(params.user); // Get user data by ID (user param is the user's ID)

    if (!user) {
        return new Error("User not found");
    }

    await updateUser(user._id, updateData); // Update user in database
    return NextResponse.json((await getUser(params.user)).toJSON()); // Return updated user data as JSON
}

export async function DELETE({ params } : {params: {user: string}}) {
    const user = await getUser(params.user); // Get user data by ID (user param is the user's ID)

    if (!user) {
        return new Error("User not found");
    }

    await deleteUser(user._id); // Delete user from database

    return NextResponse.json({ status: "successful" }); // Return success message as JSON
}