// config.js
require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    secrets: {
        jwt: process.env.JWT_SECRET || 'secret123',
        jwtExp: process.env.JWT_EXPIRES_IN || '1d',
    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'my_database',
    }
};

module.exports = config;
