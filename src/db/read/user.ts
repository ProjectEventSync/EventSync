import { db } from '../connect';
import { User } from '../../types';

export const getUser = async (userID: string) => {
  const users = await db.collection('users');
  const user = await users.findOne({ id: userID });
  return user as User;
};
