import { db } from '../connect';

// Updates a user in the database

async function updateUser(userID: string, update: any) : Promise<void> {
    const users = await db.collection('users');
    await users.updateOne({ id: userID }, { $set: update });
}

export { updateUser };
