const nodemailer = require('nodemailer');
require('dotenv').config();
const connection = require('../DataBaseConnection');
const crypto = require('crypto');

// to store the code in memory
const verificationCodes = new Map();


const generateSecureVerificationCode = () => {
    return crypto.randomInt(100000, 999999); //besi secure code hmmm
};


const signup = async (req, res) => {
    try {

        const { useremail } = req;


        const verificationCode = generateSecureVerificationCode();


        verificationCodes.set(useremail, { ...req, verificationCode });
        console.log(useremail, verificationCode);

        setTimeout(() => {
            verificationCodes.delete(useremail);
            console.log(`Verification code for ${useremail} expired.`);
        }, 20 * 60 * 1000); // 20 minutes brother

        // right now its test account kosto
        // let testAccount = await nodemailer.createTestAccount();


        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PW,
            },
        });

        // Define the email message
        let message = {
            from: process.env.EMAIL, // Sender address
            to: useremail, // Send to the user's email
            subject: "Email Verification", // Subject line
            text: `Your verification code is: ${verificationCode}`, // Plain text body
            html: `<b>Your verification code is: </b><h1>${verificationCode}</h1> <br> Please use this code to verify your account.`, // HTML body
        };

        // Send the email
        let info = await transporter.sendMail(message);

        // Respond with a success message
        return res.status(201).json({
            msg: "Verification email sent",
            info: info.messageId,
            // preview: nodemailer.getTestMessageUrl(info)
            // URL for previewing the email in Ethereal
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: error.message });
    }
};


const verify = (req, res) => {
    const { useremail, code } = req.body;


    const storedCode = verificationCodes.get(useremail).verificationCode;
    console.log(storedCode);

    if (!storedCode) {
        return res.status(400).json({ msg: "No verification code found for this email or it has expired" });
    }


    if (parseInt(code) === storedCode) {
        const user = verificationCodes.get(useremail);

        connection.query("INSERT INTO testusers (user_name, user_email, user_password, phone_number) VALUES (?, ?, ?, ?)", [user.username, useremail, user.hash, user.phonenumber], function (err, results, fields) {
            if (err) {
                res.status(500).json({ error: "Error occurred while signing up. Try Again" });
                console.log(err)
            } else {
                // res.redirect("/created");
                console.log("User created", user.username)
                verificationCodes.delete(useremail);
                res.status(200).json({
                    user: user.username,
                })
            }
        });
        // return res.status(200).json({ msg: "Email verified successfully" });
    } else {
        return res.status(400).json({ msg: "Invalid verification code" });
    }
};


module.exports = {
    signup,
    verify
};
