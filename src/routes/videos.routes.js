const express = require('express');
const router = express.Router();
const Videos = require('../controllers/videos.controller');
const { verifyToken, roleCheck } = require('../middleware/auth');

// * Video Routes

// * Get all videos (public)
router.get('/', Videos.getAllVideos);

// * Get a video by id (private for user and admin)
router.get('/:id', verifyToken, Videos.getVideoById);

// * Create a new video (private for admin)
router.post('/', [verifyToken, roleCheck('admin')], Videos.createVideo);

// * Update a video (private for admin)
router.put('/:id', [verifyToken, roleCheck('admin')], Videos.updateVideo);

// * Delete a video (private for admin)
router.delete('/:id', [verifyToken, roleCheck('admin')], Videos.deleteVideo);

module.exports = router;

