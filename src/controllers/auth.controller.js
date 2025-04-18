const { createUser, getUserByEmail } = require('../models/user.model');
const { hashPassword, comparePassword } = require('../utils/hash');
const jwt = require('jsonwebtoken');
const config = require('../config');

// Helper function to create user (with role)
const registerUser = async ({ username, email, password, role = 'user' }) => {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        throw new Error('Email already exists');
    }

    const hashedPassword = await hashPassword(password);
    await createUser(username, email, hashedPassword, role);
};

// Helper function to authenticate user
const authenticateUser = async ({ email, password }) => {
    const user = await getUserByEmail(email);
    if (!user) {
        throw new Error('User not found');
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    return user;
};

// User registration handler
const signup = async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        await registerUser({ username, email, password, role });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// User login handler
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await authenticateUser({ email, password });
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            config.secrets.jwt,
            { expiresIn: config.secrets.jwtExp }
        );
        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { signup, login };
