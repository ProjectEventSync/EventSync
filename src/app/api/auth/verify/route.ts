import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import verifyJWT from "@/app/api/utils/verifyJWT";

export async function GET() {
    try {
        const headersInstance = headers()
        const authorization = headersInstance.get('authorization');
        const data = verifyJWT(authorization);
        if ("error" in data) {
            return NextResponse.json({error: data.error})
        }
        return NextResponse.json({data: data});
    } catch {
        return NextResponse.json({error: "Invalid token"})
    }
}