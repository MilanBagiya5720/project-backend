const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const config = require('./config');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const usersRoutes = require('./routes/users.routes');

dotenv.config();

const app = express();

// Setup middlewares for security, CORS, and logging
function setupMiddlewares() {
    app.use(helmet());
    app.use(cors());
    app.use(express.json());

    if (config.env === 'development') {
        app.use(morgan('dev'));
    }
}

// Setup routes for the application
function setupRoutes() {
    app.use('/api/v1/auth', authRoutes); // Authentication routes
    app.use('/api/v1/users', usersRoutes); // Users routes (For admin)
    app.use('/api/v1/user', userRoutes); // User routes (For user)
}

// Centralized error handling
function setupErrorHandling() {
    app.use((err, req, res, next) => {
        console.error(err.stack);
        const statusCode = err.statusCode || 500;
        const message = err.message || 'Something went wrong!';

        res.status(statusCode).json({ error: message });
    });
}

function setupApp() {
    setupMiddlewares();
    setupRoutes();
    setupErrorHandling();
}

setupApp();

module.exports = app;
