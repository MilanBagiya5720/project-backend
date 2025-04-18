const app = require('./app');
const pool = require('./config/db');
const logger = require('./utils/logger');
const config = require('./config');

pool.getConnection()
    .then(connection => {
        logger.info('Connected to MySQL');
        connection.release();
    })
    .catch(err => logger.error('MySQL connection error:', err));

const server = app.listen(config.port, () => {
    logger.info(`Server running on port ${config.port}`);
});

process.on('unhandledRejection', (err) => {
    logger.error('Unhandled Rejection:', err);
    server.close(() => process.exit(1));
});

module.exports = server;
