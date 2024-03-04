import { User } from '../../types';
import { db } from '../connect';

async function createUser(user: User) {
    const users = db.collection('users');
    console.log(user.password);
    return await users.insertOne(user.toJSON());
}

export { createUser };