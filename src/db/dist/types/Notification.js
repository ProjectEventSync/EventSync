"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
var db_1 = require("../db");
var Notification = /** @class */ (function () {
    function Notification(_a) {
        var date = _a.date, initiator = _a.initiator, reciever = _a.reciever, meetup = _a.meetup, type = _a.type, read = _a.read, _id = _a._id;
        this.date = date ? date : new Date();
        this.initiator = initiator ? initiator : "";
        this.reciever = reciever ? reciever : "";
        this.meetup = meetup ? meetup : "";
        this.type = type;
        this.read = read ? read : false;
        this._id = _id ? _id : (0, db_1.generateSnowflake)();
    }
    // Converts a Notification instance to a JSON object
    Notification.prototype.toJSON = function () {
        return {
            _id: this._id,
            date: this.date,
            initiator: this.initiator,
            reciever: this.reciever,
            meetup: this.meetup,
            type: this.type,
            read: this.read,
        };
    };
    return Notification;
}());
exports.Notification = Notification;
