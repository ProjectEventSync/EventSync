import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import verifyJWT from "@/app/api/utils/verifyJWT";

export async function GET() {
    const headersInstance = headers()
    const authorization = headersInstance.get('authorization');
    try {
        const data = verifyJWT(authorization);
        if ("error" in data) {
            return NextResponse.json({error: data.error})
        }
        return NextResponse.json({data: data});
    } catch (e: any) {
        return NextResponse.json({error: e.message});
    }
}
