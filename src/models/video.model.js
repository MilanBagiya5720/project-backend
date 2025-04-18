const db = require('../config/db');

const getAllVideos = async () => {
    const [rows] = await db.query(
        'SELECT id, title, thumbnail_url, preview_url, views, likes, dislikes FROM videos'
    );
    return rows;
};

module.exports = { getAllVideos };
