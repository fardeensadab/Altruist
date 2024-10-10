const router = require('express').Router();
const { signup, verify } = require('../controller/appcontroller.js');

// Routes
router.post('/user/signup', signup);  // Signup and send email
router.post('/user/verify', verify);  // Verify the code

module.exports = router;
