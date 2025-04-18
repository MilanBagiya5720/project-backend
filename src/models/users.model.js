const db = require('../config/db');

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT id, username, email FROM users');
    return rows;
};

const getUserByEmail = async (email) => {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
};

module.exports = { getAllUsers, getUserByEmail };

