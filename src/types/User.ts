import {generateSnowflake} from "../db/utils/snowflake";

// TODO: Decide on the fields for a User
class User {
    _id: string; // MongoDB defines _id as the primary key
    username: string;
    email: string;
    password: string;
    meetups: string[] = []; // Array of meetup ids
    avatar: string; // URL to the user's avatar
    theme: "light" | "dark" | "system" = "system"; // User's preferred theme

    constructor(username: string, email: string, password: string, meetups?: string[], _id?: string, avatar?: string, theme?: "light" | "dark" | "system") {
        this._id = _id ? _id : generateSnowflake();
        this.username = username;
        this.email = email;
        this.password = password;
        this.meetups = meetups ? meetups : [];
        this.avatar = avatar ? avatar : "https://www.gravatar.com/avatar/";
        this.theme = theme? theme : "system";
    }

    // Converts a JSON object to a User instance
    static fromJSON(json: any): User {
        return new User(
            json.username,
            json.email,
            json.password,
            json.meetups,
            json._id,
            json.avatar,
            json.theme
        );
    }

    // Converts a User instance to a JSON object
    toJSON(): any {
        return {
            _id: this._id,
            username: this.username,
            email: this.email,
            password: this.password,
            meetups: this.meetups,
            avatar: this.avatar,
            theme: this.theme
        };
    }
}

const defaultUser = new User(
    "John Doe",
    "johndoe@eventsync.app",
    "password",
);

export {User, defaultUser};
