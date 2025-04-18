const express = require('express');
const router = express.Router();
const User = require('../controllers/user.controller');
const { verifyToken } = require('../middleware/auth');

//* Routes
router.get('/profile', verifyToken, User.getUserProfile);

module.exports = router;

