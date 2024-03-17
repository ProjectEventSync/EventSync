
// Types
// 1. [initiator] invited [reciever] to a meetup
// 2. User accepted your invitation to a meetup
// 3. User declined your invitation to a meetup
// 4. User accepted your friend request
// 5. User declined your friend request
// 6. User sent you a friend request
// 7. Meetup date changed
// 8. Meetup location changed
// 9. Meetup cancelled (deleted)
// 10. New announcement from [meetup]
// 11. User is not available for a meetup
// 12. [Meetup] starts in [time] (e.g. "Meetup starts in 30 minutes")
// 13. [Meetup] is starting now


import {generateSnowflake} from "../db/utils/snowflake";

interface NotificationParams {
    date?: Date;
    initiator?: string;
    receiver?: string;
    meetup?: string;
    type: number;
    read?: boolean;
    _id?: string;
}


class AppNotification {
    date: Date;
    initiator: string; // Triggered the notification [Only for notifications with a user initiator]
    receiver: string; // Receives the notification [Only for notifications with 1 reciever]
    meetup: string;
    type: number;
    read: boolean;
    _id: string;

    constructor({date, initiator, receiver, meetup, type, read, _id}: NotificationParams) {
        this.date = date? date : new Date();
        this.initiator = initiator? initiator : "";
        this.receiver = receiver? receiver : "";
        this.meetup = meetup? meetup : "";
        this.type = type;
        this.read = read? read : false;
        this._id = _id? _id : generateSnowflake();
    }

    // Converts a Notification instance to a JSON object
    toJSON(): any {
        return {
            _id: this._id,
            date: this.date,
            initiator: this.initiator,
            reciever: this.receiver,
            meetup: this.meetup,
            type: this.type,
            read: this.read,
        };
    }
}


export { AppNotification };