// Generates snowflake ids

function generateSnowflake() {
    const epoch = 1706428800000; // Amount of seconds between 1970 Jan 1st and 2024 Jan 28th.
    const time = Date.now() - epoch;
    const random = Math.floor(Math.random() * 1000);
    return ((time * 1000) + random).toString();
}

export {generateSnowflake};