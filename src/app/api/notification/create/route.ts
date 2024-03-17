import {NextRequest, NextResponse} from "next/server";
import { createNotification } from "@/db/create/notification";
import { AppNotification } from "@/types";
import {headers} from "next/headers";
import verifyJWT from "@/app/api/utils/verifyJWT";

export async function POST(request: NextRequest) {
    const headersInstance = headers();
    const authorization = headersInstance.get('authorization');
    const data = verifyJWT(authorization);

    if ("error" in data) {
        return NextResponse.json({error: data.error})
    }
    if (data.type == "api"){
        // Do additional checks for scopes
    }

    const notificationData = await request.json(); // Get user data from request body
    const meetup = new AppNotification(notificationData); // Create new user object from data
    await createNotification(meetup); // Create user in database
    return NextResponse.json(meetup.toJSON()); // Return user data as JSON
}