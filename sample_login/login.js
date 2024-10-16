
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session"); // Ensure this is imported
const multer = require("multer");
const path = require("path");

const encoder = bodyParser.urlencoded({ extended: true });
const app = express();
app.use("/assets", express.static("assets"));

// Configure session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rdbms@1234",
    database: "nodejs"
});

// Connect to the database
connection.connect(function (error) {
    if (error) {
        console.error("Database connection failed: ", error.stack);
    } else {
        console.log("Connected to the database successfully");
    }
});

app.set("view engine", "ejs");
app.set("views", __dirname); // Set views directory if your HTML is in the root directory

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

// Login handler
app.post("/", encoder, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    connection.query("SELECT * FROM loginuser WHERE user_name = ? AND user_pass = ?", [username, password], function (error, results) {
        if (error) {
            console.error("Query error:", error);
            return res.redirect("/");
        }
        if (results.length > 0) {
            req.session.username = username; // Store in session
            res.redirect("/welcome");
        } else {
            res.redirect("/");
        }
    });
});

// Serve the signup page
app.get("/signup", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

// Handle signup form submission
app.post("/signup", encoder, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // Check if the user already exists
    connection.query("SELECT * FROM loginuser WHERE user_name = ?", [username], function (error, results) {
        if (error) {
            console.error("Query error:", error);
            return res.send("Error occurred. <a href='/signup'>Try Again</a>");
        }
        if (results.length > 0) {
            // User already exists
            res.send("User already exists. <a href='/signup'>Try Again</a>");
        } else {
            // Insert the new user into the database
            connection.query("INSERT INTO loginuser (user_name, user_pass) VALUES (?, ?)", [username, password], function (error) {
                if (error) {
                    console.error("Query error:", error);
                    res.send("Error occurred while signing up. <a href='/signup'>Try Again</a>");
                } else {
                    res.redirect("/created");
                }
            });
        }
    });
});

// Welcome page
app.get("/welcome", function (req, res) {
    const username = req.session.username;
    if (!username) {
        return res.redirect("/");
    }
    res.render("welcome", { username: username });
});

// Serve the account created confirmation page
app.get("/created", function (req, res) {
    res.sendFile(path.join(__dirname, "created.html"));
});

// Set app port
app.listen(4500, () => {
    console.log("Server is running on port 4500");
});

// Configure multer for file upload
const storage = multer.memoryStorage(); // Store the file in memory temporarily
const upload = multer({ storage: storage });

// Endpoint to handle image upload
app.post("/upload-image", upload.single("image"), function (req, res) {
    const username = req.session.username; // Retrieve the username from the session
    const image = req.file;

    if (!image) {
        return res.status(400).send("No image file uploaded.");
    }

    // Insert image as a longblob into the database
    connection.query(
        "UPDATE loginuser SET profile_image = ? WHERE user_name = ?",
        [image.buffer, username],
        function (error) {
            if (error) {
                console.error("Error storing image:", error);
                res.send("Error occurred while uploading the image.");
            } else {
                res.redirect("/welcome");
            }
        }
    );
});

// Endpoint to get the profile image
app.get("/profile-image/:username", function (req, res) {
    const username = req.params.username;

    connection.query(
        "SELECT profile_image FROM loginuser WHERE user_name = ?",
        [username],
        function (error, results) {
            if (error || results.length === 0 || !results[0].profile_image) {
                return res.status(404).send("Image not found.");
            }

            res.writeHead(200, {
                "Content-Type": "image/jpeg", // Set the correct content type
                "Content-Length": results[0].profile_image.length
            });
            res.end(results[0].profile_image);
        }
    );
});


////////////////////////////////////

// Funds page
// Funds page
app.get("/funds", function (req, res) {
    const username = req.session.username;
    if (!username) {
        return res.redirect("/"); // Redirect to login if not authenticated
    }
    res.render("funds", { username: username });
});


// Donations page
app.get("/donations", function (req, res) {
    const username = req.session.username;
    if (!username) {
        return res.redirect("/");
    }
    res.render("donations", { username: username });
});

// Profile page
app.get("/profile", function (req, res) {
    const username = req.session.username;
    if (!username) {
        return res.redirect("/");
    }
    res.render("profile", { username: username });
});


////////////////

// Logout handler
app.get("/logout", function (req, res) {
    req.session.destroy((err) => {
        if (err) {
            console.error("Logout error:", err);
            return res.redirect("/"); // Redirect to login on error
        }
        res.redirect("/"); // Redirect to login after successful logout
    });
});
