// TODO: Implement user function
import { User } from '../../types';
import { db } from '../connect';

async function createUser(user: User) {
    const users = db.collection('users');
    // TODO: Implement hashing passwords @Gam3rr
    return await users.insertOne(user.toJSON());
}

export { createUser };