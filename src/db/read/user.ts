import { db } from '../connect';
import { User } from '../../types';

// Returns a user from the database
async function getUser(userID?: string, email?: string, username?: string) {
  let filter: any = {};

  if (!userID && !email && !username) {
      throw new Error("No user identifier provided");
  } else if (userID){
      filter = { _id: userID };
  } else if (email){
      filter = { email: email };
  } else if (username){
      filter = { username: username };
  }

  const users = await db.collection('users');
  const user = await users.findOne(filter);

  if (!user) {
      return null;
  }
  return User.fromJSON(user);
}

export { getUser };
