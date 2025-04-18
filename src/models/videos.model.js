const db = require('../config/db');

const getVideos = async () => {
    const [rows] = await db.query('SELECT * FROM videos');
    return rows;
};

const getVideoById = async (id) => {
    const [rows] = await db.query('SELECT * FROM videos WHERE id = ?', [id]);
    return rows[0];
};

const createVideo = async (videoData) => {
    const { title, thumbnailUrl, previewUrl, views = 0, likes = 0, dislikes = 0 } = videoData;
    const sql = 'INSERT INTO videos (title, thumbnail_url, preview_url, views, likes, dislikes) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [title, thumbnailUrl, previewUrl, views, likes, dislikes];

    const [result] = await db.query(sql, values);

    return result.insertId;
};

const updateVideo = async (id, videoData) => {
    const { title, thumbnailUrl, previewUrl, views, likes, dislikes } = videoData;
    await db.query(
        'UPDATE videos SET title = ?, thumbnail_url = ?, preview_url = ?, views = ?, likes = ?, dislikes = ? WHERE id = ?',
        [title, thumbnailUrl, previewUrl, views, likes, dislikes, id]
    );
    return id;
};

const deleteVideo = async (id) => {
    await db.query('DELETE FROM videos WHERE id = ?', [id]);
    return id;
};

module.exports = {
    getVideos,
    getVideoById,
    createVideo,
    updateVideo,
    deleteVideo,
};

