import { db } from '../connect';

async function deleteUser(userID: string) {
    const users = db.collection('users');
    const meetups = db.collection('meetups');

    const user = await users.findOne({ _id: userID });
    const meetupsList = user.meetups;

    // Remove the user from the meetups' attendees list

    for (let i = 0; i < meetupsList.length; i++) {
        const meetup = await meetups.findOne({ _id: meetupsList[i] });
        const attendees = meetup.attendees;
        const index = attendees.indexOf(userID);
        attendees.splice(index, 1);
        await meetups.updateOne({ _id: meetupsList[i] }, { $set: { attendees: attendees } });
    }

    return await users.deleteOne({_id: userID});
}

export { deleteUser }