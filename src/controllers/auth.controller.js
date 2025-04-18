const { createUser, getUserByEmail } = require('../models/user.model');
const { hashPassword, comparePassword } = require('../utils/hash');
const jwt = require('jsonwebtoken');

const registerUser = async (username, email, password) => {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        throw new Error('Email already exists');
    }

    const hashed = await hashPassword(password);
    await createUser(username, email, hashed);
};

const authenticateUser = async (email, password) => {
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

const signup = async (req, res) => {
    try {
        await registerUser(req.body.username, req.body.email, req.body.password);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const login = async (req, res) => {
    try {
        const user = await authenticateUser(req.body.email, req.body.password);
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN });
        res.json({ message: 'Login successful', token });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { signup, login };

