const VideosModel = require('../models/videos.model');
const response = require('../utils/response');

async function getAllVideos(req, res) {
    try {
        const videos = await VideosModel.getVideos();
        response.success(res, videos, 'Videos fetched successfully');
    } catch (err) {
        response.error(res, 'Database error');
    }
}

async function getVideoById(req, res) {
    try {
        const video = await VideosModel.getVideoById(req.params.id);
        response.success(res, video, 'Video fetched successfully');
    } catch (err) {
        response.error(res, 'Video not found');
    }
}

async function createVideo(req, res) {
    try {
        const videoData = req.body;
        const id = await VideosModel.createVideo(videoData);
        response.success(res, { id }, 'Video created successfully', 201);
    } catch (err) {
        response.error(res, 'Invalid request');
    }
}

async function updateVideo(req, res) {
    try {
        const videoData = req.body;
        await VideosModel.updateVideo(req.params.id, videoData);
        response.success(res, null, 'Video updated successfully');
    } catch (err) {
        response.error(res, 'Invalid request');
    }
}

async function deleteVideo(req, res) {
    try {
        await VideosModel.deleteVideo(req.params.id);
        response.success(res, null, 'Video deleted successfully');
    } catch (err) {
        response.error(res, 'Video not found');
    }
}

module.exports = { getAllVideos, getVideoById, createVideo, updateVideo, deleteVideo };

