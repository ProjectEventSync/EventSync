const nodemailer = require("nodemailer");
const { generateSnowflake } = require("../db");
require("dotenv").config({path: ".env.local"});
const express = require("express");
const cors = require("cors");


const transporter = nodemailer.createTransport(
    {
        host: 'smtp.gmail.com',
        port: 465, // Zoho uses port 465 for SSL
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'contact.eventsync@gmail.com', // username for your mail server
            pass: process.env.MAIL_PASSWORD, // password
        },
    }
);


const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.NEXT_PUBLIC_APP_URL }));

app.post("/send-verification-email", async (req, res) => {
    let verificationCode = generateSnowflake();
    // Get last 5 digits of snowflake

    verificationCode = verificationCode.toString().slice(-5);

    const userEmail = req.body["email"];

    const mailOptions = {
        from: "EventSync <contact@eventsync.app>",
        to: userEmail,
        subject: 'EventSync Verification Code',
        text: `Your verification code is: ${verificationCode}`,
    }

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send({message: "Error sending email"});
        } else {
            console.log('Email sent: ' + info.response);
            res.send({message: verificationCode});
        }
    });
});

app.listen(3001, () => {
    console.log('HTTPS Server running on port 443');
});



