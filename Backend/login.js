require('dotenv').config();
const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded({ extended: true });
const path = require("path");
const bcrypt = require('bcrypt');

const PORT = 4500;


const app = express();
app.use("/assets", express.static("assets"));


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

//connect to the database
connection.connect(function (error) {
    if (error) //
        console.error("Database connection failed: ", error.stack);
    else console.log("Connect to the database successfully. http://localhost:" + PORT)
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", encoder, async function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    console.log("POST request received at /");
    console.log("Username:", req.body.username);
    // console.log("Password:", req.body.password);

    connection.query("select * from altruist.testusers where user_name = ?", [username], async function (error, results, fields) {
        if (results.length > 0) {
            const passwordMatch = await bcrypt.compare(password, results[0].user_password);
            console.log(passwordMatch)
            if (passwordMatch) {
                res.redirect("/welcome");
            }
            else{
                res.redirect("/");
            }
        } else {
            res.redirect("/");
        }
        //res.end();
    })
})


// Serve the signup page
app.get("/signup", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});


// Handle signup form submission
app.post("/signup", encoder, async function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    const hash = await bcrypt.hash(password, 11);

    // Check if the user already exists
    connection.query("SELECT * FROM testusers WHERE user_name = ?", [username], function (error, results, fields) {
        if (results.length > 0) {
            // User already exists
            res.send("User already exists. <a href='/signup'>Try Again</a>");
        } else {
            // Insert the new user into the database
            connection.query("INSERT INTO testusers (user_name, user_password) VALUES (?, ?)", [username, hash], function (error, results, fields) {
                if (error) {
                    res.send("Error occurred while signing up. <a href='/signup'>Try Again</a>");
                } else {
                    res.redirect("/created");
                }
            });
        }
    });
});



// When login is success
app.get("/welcome", function (req, res) {
    res.sendFile(__dirname + "/welcome.html")
})

// Serve the account created confirmation page
app.get("/created", function (req, res) {
    res.sendFile(path.join(__dirname, "created.html"));
});


// Set app port
app.listen(PORT);

