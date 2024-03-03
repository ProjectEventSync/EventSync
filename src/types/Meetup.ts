import {generateSnowflake} from "../db/utils/snowflake";
import {defaultUser} from "./User";

// TODO: Decide on the fields for a Meetup
class Meetup {
    _id: string; // MongoDB defines _id as the primary key
    title: string;
    creator: string; // User id
    description: string;
    date: Date;
    image: string; // URL
    location: string;
    attendees: string[] = []; // Array of user ids

    constructor(title: string, description: string, date: Date, location: string, creator: string, attendees?: string[], _id?: string, image?: string) {
        this._id = _id? _id : generateSnowflake();
        this.title = title;
        this.description = description;
        this.date = date;
        this.location = location;
        this.creator = creator;
        this.attendees = attendees ? attendees : [];
        this.image = image ? image : "https://via.placeholder.com/150";
    }

    // Converts a JSON object to a Meetup instance
    static fromJSON(json: any): Meetup {
        return new Meetup(
            json.title,
            json.description,
            json.date,
            json.location,
            json.creator,
            json.attendees,
            json._id,
            json.image
        );
    }

    // Converts a Meetup instance to a JSON object
    toJSON(): any {
        return {
            id: this._id,
            title: this.title,
            creator: this.creator,
            description: this.description,
            date: this.date,
            location: this.location,
            attendees: this.attendees,
            image: this.image
        };
    }
}

const defaultMeetup = new Meetup(
    "Meetup Title",
    "Meetup Description",
    new Date("2022-12-12T12:00:00Z"),
    "none",
    defaultUser._id,
    [defaultUser._id],
    undefined,
    "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2017/04/thumb_720_450_Alpsdreamstime_xl_45054687.jpg"
);

export {Meetup, defaultMeetup};