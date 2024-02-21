"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meetup = void 0;
var snowflake_1 = require("../db/utils/snowflake");
// TODO: Decide on the fields for a Meetup
var Meetup = /** @class */ (function () {
    function Meetup(title, description, date, location, creator, attendees, _id) {
        this.attendees = []; // Array of user ids
        this._id = _id ? _id : (0, snowflake_1.generateSnowflake)();
        this.title = title;
        this.description = description;
        this.date = date;
        this.location = location;
        this.creator = creator;
        this.attendees = attendees ? attendees : [];
    }
    // Converts a JSON object to a Meetup instance
    Meetup.fromJSON = function (json) {
        return new Meetup(json.title, json.description, json.date, json.location, json.creator, json.attendees, json._id);
    };
    // Converts a Meetup instance to a JSON object
    Meetup.prototype.toJSON = function () {
        return {
            id: this._id,
            title: this.title,
            creator: this.creator,
            description: this.description,
            date: this.date,
            location: this.location,
            attendees: this.attendees
        };
    };
    return Meetup;
}());
exports.Meetup = Meetup;
