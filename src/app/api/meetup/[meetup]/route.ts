import {NextRequest, NextResponse} from "next/server";
import { getMeetup } from "@/db/read/meetup";
import { updateMeetup } from "@/db/update/meetup";
import { deleteMeetup } from "@/db/delete/meetup";

export async function GET({ params } : {params: {meetup: string}}) {
    const meetup = await getMeetup(params.meetup); // Get user data by ID (user param is the user's ID)

    if (!meetup) {
        return new Error("Meetup not found");
    }

    return NextResponse.json(meetup.toJSON()); // Return user data as JSON
}

export async function PUT(request: NextRequest, { params } : {params: {meetup: string}}) {
    const updateData = await request.json(); // Get user data from request body
    const meetup = await getMeetup(params.meetup); // Get user data by ID (user param is the user's ID)

    if (!meetup) {
        return new Error("Meetup not found");
    }

    await updateMeetup(meetup._id, updateData); // Update user in database
    return NextResponse.json((await getMeetup(params.meetup)).toJSON()); // Return updated user data as JSON
}

export async function DELETE({ params } : {params: {meetup: string}}) {
    const meetup = await getMeetup(params.meetup); // Get user data by ID (user param is the user's ID)

    if (!meetup) {
        return new Error("Meetup not found");
    }

    await deleteMeetup(meetup._id); // Delete user from database

    return NextResponse.json({ status: "successful" }); // Return success message as JSON
}