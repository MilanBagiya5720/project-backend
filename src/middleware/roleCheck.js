// roleCheck.js
const roleCheck = (requiredRole) => {
    return (req, res, next) => {
        const { role } = req.user;  // The user info will be decoded from JWT

        if (role !== requiredRole) {
            return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
        }
        next();
    };
};

module.exports = roleCheck;
