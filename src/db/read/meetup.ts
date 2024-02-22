import { db } from '../connect';
import { Meetup } from '../../types';

// Returns a meetup from the database

async function getMeetup(meetupID: string) : Promise<Meetup> {
  const meetups = await db.collection('meetups');
  const meetup = await meetups.findOne({ id: meetupID });
  return meetup as Meetup;
}

export { getMeetup };