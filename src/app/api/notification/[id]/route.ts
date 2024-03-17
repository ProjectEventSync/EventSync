import {NextRequest, NextResponse} from "next/server";
import { getNotification } from "@/db/read/notification";

import {headers} from "next/headers";
import verifyJWT from "@/app/api/utils/verifyJWT";

export async function GET(request: NextRequest, { params } : {params: {id: string}}) {
    const headersInstance = headers();
    const authorization = headersInstance.get('authorization');
    const data = verifyJWT(authorization);

    if ("error" in data) {
        return NextResponse.json({error: data.error})
    }
    if (data.type == "api"){
        // Do additional checks for scopes
    }


    const notificationObj = await getNotification(params.id); // Get user data by ID (user param is the user's ID)

    if (!notificationObj) {
        return NextResponse.json({error: 'Notification not found'});
    }

    return NextResponse.json(notificationObj.toJSON()); // Return user data as JSON
}

export async function PUT(request: NextRequest, { params } : {params: {id: string}}) {
    const headersInstance = headers();
    const authorization = headersInstance.get('authorization');
    const data = verifyJWT(authorization);

    if ("error" in data) {
        return NextResponse.json({error: data.error})
    }
    if (data.type == "api"){
        // Do additional checks for scopes
    }


    // TODO: Implement updateNotification
}

export async function DELETE(request: NextRequest, { params } : {params: {meetup: string}}) {
    const headersInstance = headers();
    const authorization = headersInstance.get('authorization');
    const data = verifyJWT(authorization);

    if ("error" in data) {
        return NextResponse.json({error: data.error})
    }
    if (data.type == "api"){
        // Do additional checks for scopes
    }

    // TODO: Implement deleteNotification
}