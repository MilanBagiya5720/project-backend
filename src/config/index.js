require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const baseConfig = {
    env,
    port: process.env.PORT || 3000,
    secrets: {
        jwt: process.env.JWT_SECRET,
        jwtExp: process.env.JWT_EXPIRES_IN,
    },
    mongodb: {
        uri: process.env.MONGODB_URI,
    },
};

const config = {
    ...baseConfig,
};

module.exports = config;