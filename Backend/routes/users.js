const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded({ extended: true });
const bcrypt = require('bcrypt');
const connection= require('../DataBaseConnection');
// login
router.post("/", encoder, async function (req, res) {
    var useremail = req.body.useremail;
    var password = req.body.password;

    console.log("POST request received at /");
    console.log("useremail:", req.body.useremail);
    // console.log("Password:", req.body.password);

    connection.query("select * from altruist.testusers where user_email = ?", [useremail], async function (error, results, fields) {
        if (results.length > 0) {
            const passwordMatch = await bcrypt.compare(password, results[0].user_password);
            // console.log(passwordMatch)
            if (passwordMatch) {
                res.redirect("/welcome");
            }
            else {
                res.redirect("/");
            }
        } else {
            res.redirect("/");
        }
        //res.end();
    })
})

// Handle signup form submission
router.post("/signup", encoder, async function (req, res) {
    var username = req.body.username;
    var useremail = req.body.useremail;
    var password = req.body.password;
    const hash = await bcrypt.hash(password, 11);

    // Check if the user already exists
    connection.query("SELECT * FROM testusers WHERE user_email = ?", [useremail], function (error, results, fields) {
        if (results.length > 0) {
            // User already exists
            res.send("User already exists. <a href='/signup'>Try Again</a>");
        } else {
            // Insert the new user into the database
            connection.query("INSERT INTO testusers (user_name, user_email, user_password) VALUES (?, ?, ?)", [username, useremail, hash], function (error, results, fields) {
                if (error) {
                    res.send("Error occurred while signing up. <a href='/signup'>Try Again</a>");
                } else {
                    res.redirect("/created");
                }
            });
        }
    });
});

module.exports = router