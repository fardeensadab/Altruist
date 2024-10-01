
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
const path = require("path");


const app = express();
app.use("/assets",express.static("assets"));


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rdbms@1234",
    database: "nodejs"
});

//connect to the database
connection.connect(function(error){
    if(error) //
        console.error("Database connection failed: ",error.stack);
    else console.log("Connect to the database successfully")
});

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",encoder,function(req,res){
    var username = req.body.username;
    var password = req.body.password;

    console.log("POST request received at /");
    console.log("Username:", req.body.username);
    console.log("Password:", req.body.password);

    connection.query("select * from nodejs.loginuser where user_name = ? and user_pass = ?", [username,password],function(error,results,fields){
        if(results.length > 0)
        {
            res.redirect("/welcome");
        }else{
            res.redirect("/");
        }
        //res.end();
    })
})


// Serve the signup page
app.get("/signup", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});


// Handle signup form submission
app.post("/signup", encoder, function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    // Check if the user already exists
    connection.query("SELECT * FROM loginuser WHERE user_name = ?", [username], function(error, results, fields) {
        if (results.length > 0) {
            // User already exists
            res.send("User already exists. <a href='/signup'>Try Again</a>");
        } else {
            // Insert the new user into the database
            connection.query("INSERT INTO loginuser (user_name, user_pass) VALUES (?, ?)", [username, password], function(error, results, fields) {
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
app.get("/welcome",function(req,res){
    res.sendFile(__dirname + "/welcome.html")
})

// Serve the account created confirmation page
app.get("/created", function(req, res) {
    res.sendFile(path.join(__dirname, "created.html"));
});


// Set app port
app.listen(4500);

