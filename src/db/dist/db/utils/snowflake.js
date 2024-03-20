"use strict";
// Generates snowflake ids
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSnowflake = void 0;
function generateSnowflake() {
    var epoch = 1706428800000; // Amount of seconds between 1970 Jan 1st and 2024 Jan 28th.
    var time = Date.now() - epoch;
    var random = Math.floor(Math.random() * 1000);
    return ((time * 1000) + random).toString();
}
exports.generateSnowflake = generateSnowflake;
