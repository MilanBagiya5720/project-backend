const express = require('express');
const router = express.Router();
const VideoController = require('../controllers/video.controller');

router.get('/', VideoController.getLandingVideos);

module.exports = router;
