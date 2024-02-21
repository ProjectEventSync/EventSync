import { db } from '../connect';

async function deleteMeetup(meetupID: string) {
    const meetups = db.collection('meetups');
    const users = db.collection('users');
    const meetup = await meetups.findOne({ _id: meetupID });
    const attendees = meetup.attendees;

    // Remove the meetup from the attendees' meetups list
    for (let i = 0; i < attendees.length; i++) {
        const user = await users.findOne({ _id: attendees[i] });
        const meetups = user.meetups;
        const index = meetups.indexOf(meetupID);
        meetups.splice(index, 1);
        await users.updateOne({ _id: attendees[i] }, { $set: { meetups: meetups } });
    }

    return await meetups.deleteOne({ _id: meetupID });
}

export { deleteMeetup };