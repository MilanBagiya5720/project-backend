const express = require('express');
const router = express.Router();
const Users = require('../controllers/users.controller');

//* Routes
router.get('/', Users.getUsers);

module.exports = router;
