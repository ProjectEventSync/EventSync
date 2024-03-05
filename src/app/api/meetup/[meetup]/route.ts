import {NextRequest, NextResponse} from "next/server";
import { getMeetup } from "@/db/read/meetup";
import { updateMeetup } from "@/db/update/meetup";
import { deleteMeetup } from "@/db/delete/meetup";

export async function GET(request: NextRequest, { params } : {params: {meetup: string}}) {
    const meetup = await getMeetup(params.meetup); // Get user data by ID (user param is the user's ID)

    if (!meetup) {
        return NextResponse.json({error: 'Meetup not found'});
    }

    return NextResponse.json(meetup.toJSON()); // Return user data as JSON
}

export async function PUT(request: NextRequest, { params } : {params: {meetup: string}}) {
    const updateData = await request.json(); // Get user data from request body
    const meetup = await getMeetup(params.meetup); // Get user data by ID (user param is the user's ID)

    if (!meetup) {
        return NextResponse.json({error: 'Meetup not found'});
    }

    await updateMeetup(meetup._id, updateData); // Update user in database
    const updatedMeetup = await getMeetup(params.meetup);
    if (!updatedMeetup) {
        return NextResponse.json({error: 'Meetup not found'});
    }
    return NextResponse.json(updatedMeetup.toJSON()); // Return updated user data as JSON
}

export async function DELETE(request: NextRequest, { params } : {params: {meetup: string}}) {
    const meetup = await getMeetup(params.meetup); // Get user data by ID (user param is the user's ID)

    if (!meetup) {
        return NextResponse.json({error: 'Meetup not found'});
    }

    await deleteMeetup(meetup._id); // Delete user from database

    return NextResponse.json({ status: "successful" }); // Return success message as JSON
}