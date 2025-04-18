const VideoModel = require('../models/video.model');
const response = require('../utils/response');

const getLandingVideos = async (req, res) => {
    try {
        const videos = await VideoModel.getAllVideos();
        return response.success(res, videos, 'Landing videos fetched successfully');
    } catch (err) {
        console.error(err);
        return response.error(res, 'Failed to fetch videos');
    }
};

module.exports = { getLandingVideos };
