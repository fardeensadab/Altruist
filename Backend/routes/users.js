const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded({ extended: true });
const bcrypt = require('bcrypt');
const connection = require('../DataBaseConnection');

// login
router.post("/login", encoder, async function (req, res) {
    var useremail = req.body.useremail;
    var password = req.body.password;

    console.log("POST request received at /user/login");
    console.log("useremail:", req.body.useremail);

    connection.query("select * from altruist.testusers where user_email = ?", [useremail], async function (error, results, fields) {
        if (results.length > 0) {
            const passwordMatch = await bcrypt.compare(password, results[0].user_password);

            if (passwordMatch) {
                res.status(200).json({
                    user: results[0].user_name,
                })
            }
            else {
                res.status(404).json({
                    user: null,
                })
            }
        } else {
            res.status(404).json({
                user: null,
            })
        }
        //res.end();
    })
})

// Handle signup form submission
router.post("/signup", encoder, async function (req, res) {
    var username = req.body.username;
    var useremail = req.body.useremail;
    var password = req.body.password;
    var phonenumber = req.body.phonenumber;
    console.log(req.body)

    let hash;
    try {
        hash = await bcrypt.hash(password, 11);
    }
    catch (err) {
        res.status(400).json({ error: "Nothing sent" });
        console.log(err)

        return
    }


    // Check if the user already exists
    connection.query("SELECT * FROM testusers WHERE user_email = ?", [useremail], function (error, results, fields) {
        if (results.length > 0) {
            // User already exists
            res.status(404).json({error: "User already exists. <a href='/signup'>Try Again</a>"});
            console.log(error)

        } else {
            // Insert the new user into the database
            connection.query("INSERT INTO testusers (user_name, user_email, user_password, phone_number) VALUES (?, ?, ?, ?)", [username, useremail, hash, phonenumber], function (err, results, fields) {
                if (err) {
                    res.status(404).json({ error: "Error occurred while signing up. <a href='/signup'>Try Again</a>" });
                    console.log(err)
                } else {
                    // res.redirect("/created");
                    // console.log(results[0])
                    res.status(200).json({
                        user: username,
                    })
                }
            });
        }
    });
});

module.exports = router