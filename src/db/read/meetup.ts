import { db } from '../connect';
import { Meetup } from '../../types';

// Returns a meetup from the database

async function getMeetup(meetupID: string) {
  const meetups = await db.collection('meetups');
  const meetup = await meetups.findOne({ _id: meetupID });

  if (!meetup) {
      return null;
  }

  return new Meetup(meetup);
}

export { getMeetup };