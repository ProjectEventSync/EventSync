import { db } from '../connect';

// Updates a meetup in the database

async function updateMeetup(meetupID: string, update: any) : Promise<void> {
  const meetups = await db.collection('meetups');
  await meetups.updateOne({ id: meetupID }, { $set: update });
}

export { updateMeetup };