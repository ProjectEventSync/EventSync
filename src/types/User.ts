import {generateSnowflake} from "../db/utils/snowflake";

// TODO: Decide on the fields for a User
class User {
    _id: string; // MongoDB defines _id as the primary key
    name: string;
    email: string;
    password: string;
    meetups: string[] = []; // Array of meetup ids

    constructor(id: number, name: string, email: string, password: string, meetups?: string[], _id?: string) {
        this._id = _id ? _id : generateSnowflake();
        this.name = name;
        this.email = email;
        this.password = password;
        this.meetups = meetups ? meetups : [];
    }

    // Converts a JSON object to a User instance
    static fromJSON(json: any): User {
        return new User(
            json.id,
            json.name,
            json.email,
            json.password,
            json.meetups,
            json._id
        );
    }

    // Converts a User instance to a JSON object
    toJSON(): any {
        return {
            id: this._id,
            name: this.name,
            email: this.email,
            password: this.password,
            meetups: this.meetups
        };
    }
}

export {User};
