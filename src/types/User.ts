import {generateSnowflake} from "../db/utils/snowflake";

// TODO: Decide on the fields for a User
interface UserParams {
    username: string;
    email: string;
    password: string;
    meetups?: string[];
    _id?: string;
    avatar?: string;
    notifications?: string[];
    theme?: "light" | "dark" | "system";
    verified?: boolean;
}

class User {
    _id: string; // MongoDB defines _id as the primary key
    username: string;
    email: string;
    password: string;
    meetups: string[]; // Array of meetup ids
    avatar: string; // URL to the user's avatar
    notifications: string[]; // Array of notification ids
    theme: "light" | "dark" | "system" = "system"; // User's preferred theme
    verified: boolean; // Whether the user has verified their email

    constructor({username, email, password, meetups, _id, avatar, notifications, theme, verified}: UserParams) {
        this._id = _id ? _id : generateSnowflake();
        this.username = username;
        this.email = email;
        this.password = password;
        this.meetups = meetups ? meetups : [];
        this.avatar = avatar ? avatar : "https://www.gravatar.com/avatar/";
        this.notifications = notifications ? notifications : [];
        this.theme = theme? theme : "system";
        this.verified = verified ? verified : false;
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
            notifications: this.notifications,
            theme: this.theme,
            verified: this.verified
        };
    }
}

const defaultUser = new User({
    username: "John Doe",
    email: "johndoe@eventsync.app",
    password: "password",
});

export {User, defaultUser};
