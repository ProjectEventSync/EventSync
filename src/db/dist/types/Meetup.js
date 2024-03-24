"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultMeetup = exports.Meetup = void 0;
var snowflake_1 = require("../db/utils/snowflake");
var User_1 = require("./User");
var Meetup = /** @class */ (function () {
    function Meetup(_a) {
        var title = _a.title, creator = _a.creator, description = _a.description, date = _a.date, location = _a.location, attendees = _a.attendees, _id = _a._id, image = _a.image, invited = _a.invited, unavailable = _a.unavailable;
        this._id = _id ? _id : (0, snowflake_1.generateSnowflake)();
        this.title = title;
        this.description = description;
        this.date = date ? date : new Date();
        this.location = location;
        this.creator = creator;
        this.attendees = attendees ? attendees : [];
        this.image = image ? image : "https://via.placeholder.com/150";
        this.invited = invited ? invited : [];
        this.unavailable = unavailable ? unavailable : [];
    }
    // Converts a Meetup instance to a JSON object
    Meetup.prototype.toJSON = function () {
        return {
            _id: this._id,
            title: this.title,
            creator: this.creator,
            description: this.description,
            date: this.date,
            location: this.location,
            attendees: this.attendees,
            invited: this.invited,
            image: this.image,
            unavailable: this.unavailable
        };
    };
    return Meetup;
}());
exports.Meetup = Meetup;
var defaultMeetup = new Meetup({
    title: "Excursion in the Alps",
    description: "We will be hiking in the Alps. Bring your hiking boots and a packed lunch.",
    date: new Date("2022-12-12T12:00:00Z"),
    creator: User_1.defaultUser._id,
    attendees: [User_1.defaultUser._id],
    location: "Alps, Switzerland",
    image: "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2017/04/thumb_720_450_Alpsdreamstime_xl_45054687.jpg"
});
exports.defaultMeetup = defaultMeetup;
