import { db } from '../connect';
import { User } from '../../types';

// Returns a user from the database
async function getUser(userID: string = "", email: string = "", username: string = "") : Promise<User> {
  let filter: any = {};

  if (userID === "" && email === "" && username === "") {
      throw new Error("No user identifier provided");
  } else if (userID !== ""){
      filter = { id: userID };
  } else if (email !== ""){
      filter = { email: email };
  } else if (username !== ""){
        filter = { username: username };
  }

  const users = await db.collection('users');
  const user = await users.findOne(filter);
  return user as User;
}

export { getUser };
