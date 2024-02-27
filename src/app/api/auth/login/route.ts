// TODO: Implement API routes for login - POST (create)
import {NextRequest} from 'next/server';
import {getUser} from '@/db/read/user';


export async function POST(request: NextRequest) {
    const {emailOrUsername, password} = await request.json();
    let user = await getUser(undefined, emailOrUsername); // Check if email exists

    if (!user) {
        user = await getUser(undefined, undefined, emailOrUsername); // Check if username exists

        if (!user) {
            return new Error("User not found"); // If neither email nor username exists, return error
        }
    }

    // TODO: Implement password hashing and password checking @Gam3rr

    // TODO: Implement session handling

    return;
}