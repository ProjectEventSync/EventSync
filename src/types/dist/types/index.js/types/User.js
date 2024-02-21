"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var snowflake_1 = require("../db/utils/snowflake");
// TODO: Decide on the fields for a User
var User = /** @class */ (function () {
    function User(id, name, email, password, meetups, _id) {
        this.meetups = []; // Array of meetup ids
        this._id = _id ? _id : (0, snowflake_1.generateSnowflake)();
        this.name = name;
        this.email = email;
        this.password = password;
        this.meetups = meetups ? meetups : [];
    }
    // Converts a JSON object to a User instance
    User.fromJSON = function (json) {
        return new User(json.id, json.name, json.email, json.password, json.meetups, json._id);
    };
    // Converts a User instance to a JSON object
    User.prototype.toJSON = function () {
        return {
            id: this._id,
            name: this.name,
            email: this.email,
            password: this.password,
            meetups: this.meetups
        };
    };
    return User;
}());
exports.User = User;
