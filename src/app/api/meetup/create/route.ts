import {NextRequest, NextResponse} from "next/server";
import { createMeetup } from "@/db/create/meetup";
import { Meetup } from "@/types";

export async function POST(request: NextRequest) {
    const meetupData = await request.json(); // Get user data from request body
    const meetup = Meetup.fromJSON(meetupData); // Create new user object from data
    await createMeetup(meetup); // Create user in database
    return NextResponse.json(meetup.toJSON()); // Return user data as JSON
}