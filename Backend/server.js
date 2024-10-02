const express = require('express');
const appRoute = require('./ROUTES/routes.js')

const app = express();
const PORT = 5000;

app.use(express.json());

// lets call routes baby

app.use('/api', appRoute)

app.listen(PORT, () => {

    console.log("I am on")
})