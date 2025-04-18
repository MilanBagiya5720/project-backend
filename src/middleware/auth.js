// auth.js
const jwt = require('jsonwebtoken');
const config = require('../config');

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No token provided' });
    }

    try {
        const decoded = jwt.verify(token, config.secrets.jwt);
        req.user = decoded;  // Add user data to the request object
        next();
    } catch (err) {
        return res.status(400).json({ message: 'Invalid Token' });
    }
};

const roleCheck = (requiredRole) => {
    return (req, res, next) => {
        const { role } = req.user;  // The user info will be decoded from JWT

        if (role !== requiredRole) {
            return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
        }
        next();
    };
};

module.exports = { verifyToken, roleCheck };
