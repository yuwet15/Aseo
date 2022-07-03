const express = require('express');
const user = require('./routes/user');
const router = express.Router();

// Routes
router.use('/user', user);  


module.exports = router;