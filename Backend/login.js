require('dotenv').config();
const path = require("path");
const express = require("express");


const PORT = process.env.APP_PORT;

const app = express();

const userRouter = require('./routes/users')
app.use("/", userRouter);


app.use("/assets", express.static("assets"));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})




// Serve the signup page
app.get("/signup", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
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

