require('dotenv').config();
const path = require("path");
const express = require("express");
const cors = require('cors');

const PORT = process.env.APP_PORT;

const app = express();
app.use(cors());
app.use(express.json())

app.get("/", (req, res)=>{
    res.status(200).json({"msg": "Altruist Server is Running"})
})

const userRouter = require('./routes/users')
app.use("/user/", userRouter);


// app.use("/assets", express.static("assets"));










// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/index.html");
// })

// // Serve the signup page
// app.get("/signup", function (req, res) {
//     res.sendFile(__dirname + "/signup.html");
// });

// // When login is success
// app.get("/welcome", function (req, res) {
//     res.sendFile(__dirname + "/welcome.html")
// })

// // Serve the account created confirmation page
// app.get("/created", function (req, res) {
//     res.sendFile(path.join(__dirname, "created.html"));
// });


// Set app port
app.listen(PORT);

