const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');
const routes = require('./routes/routes');
const authRoutes = require('./routes/auth.routes');
const videoRoutes = require('./routes/video.routes');

const app = express();

function setupMiddlewares() {
    app.use(helmet());
    app.use(cors());
    app.use(express.json());

    if (config.env === 'development') {
        app.use(morgan('dev'));
    }
}

function setupRoutes() {
    app.use('/api/v1/users', routes);
    app.use('/api/v1/auth', authRoutes);
    app.use('/api/v1/videos', videoRoutes);
}

function setupErrorHandling() {
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).json({ error: 'Something went wrong!' });
    });
}

setupMiddlewares();
setupRoutes();
setupErrorHandling();

module.exports = app;
