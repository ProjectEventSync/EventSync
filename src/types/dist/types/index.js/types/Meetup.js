"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultMeetup = exports.Meetup = void 0;
var snowflake_1 = require("../db/utils/snowflake");
var User_1 = require("./User");
// TODO: Decide on the fields for a Meetup
var Meetup = /** @class */ (function () {
    function Meetup(title, description, date, location, creator, attendees, _id, image) {
        this.attendees = []; // Array of user ids
        this._id = _id ? _id : (0, snowflake_1.generateSnowflake)();
        this.title = title;
        this.description = description;
        this.date = date;
        this.location = location;
        this.creator = creator;
        this.attendees = attendees ? attendees : [];
        this.image = image ? image : "https://via.placeholder.com/150";
    }
    // Converts a JSON object to a Meetup instance
    Meetup.fromJSON = function (json) {
        return new Meetup(json.title, json.description, json.date, json.location, json.creator, json.attendees, json._id, json.image);
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
            attendees: this.attendees,
            image: this.image
        };
    };
    return Meetup;
}());
exports.Meetup = Meetup;
var defaultMeetup = new Meetup("Excursion in the Alps", "We will be hiking in the Alps. Bring your hiking boots and a packed lunch.", new Date("2022-12-12T12:00:00Z"), "none", User_1.defaultUser._id, [User_1.defaultUser._id], undefined, "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2017/04/thumb_720_450_Alpsdreamstime_xl_45054687.jpg");
exports.defaultMeetup = defaultMeetup;
