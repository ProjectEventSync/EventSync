import { Meetup } from "../../types";
import { db } from "../connect";

async function createMeetup(meetup: Meetup) {
    const meetups = db.collection('meetups');
    const users = db.collection('users');

    for (let i = 0; i < meetup.attendees.length; i++) {
        const user = await users.findOne({ _id: meetup.attendees[i] });
        const meetups = user.meetups;
        meetups.push(meetup._id);
        await users.updateOne({ _id: meetup.attendees[i] }, { $set: { meetups: meetups } });
    }

    return await meetups.insertOne(meetup.toJSON());
}

export { createMeetup };