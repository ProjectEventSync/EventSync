"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultUser = exports.User = void 0;
var snowflake_1 = require("../db/utils/snowflake");
var User = /** @class */ (function () {
    function User(_a) {
        var username = _a.username, email = _a.email, password = _a.password, meetups = _a.meetups, _id = _a._id, avatar = _a.avatar, theme = _a.theme;
        this.meetups = []; // Array of meetup ids
        this.theme = "system"; // User's preferred theme
        this._id = _id ? _id : (0, snowflake_1.generateSnowflake)();
        this.username = username;
        this.email = email;
        this.password = password;
        this.meetups = meetups ? meetups : [];
        this.avatar = avatar ? avatar : "https://www.gravatar.com/avatar/";
        this.theme = theme ? theme : "system";
    }
    // Converts a User instance to a JSON object
    User.prototype.toJSON = function () {
        return {
            _id: this._id,
            username: this.username,
            email: this.email,
            password: this.password,
            meetups: this.meetups,
            avatar: this.avatar,
            theme: this.theme
        };
    };
    return User;
}());
exports.User = User;
var defaultUser = new User({
    username: "John Doe",
    email: "johndoe@eventsync.app",
    password: "password",
});
exports.defaultUser = defaultUser;
