const express = require('express');
const router = express.Router();
const User = require('../controllers/user.controller');

//* Routes
router.get('/', User.getUsers);

router.post('/', User.createUser);

module.exports = router;
