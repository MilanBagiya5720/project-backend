const UserModel = require('../models/user.model');
const response = require('../utils/response');

const getUsers = async (req, res) => {
    try {
        const users = await UserModel.getAllUsers();
        return response.success(res, users, 'Users fetched successfully');
    } catch (err) {
        console.error(err);
        return response.error(res, 'Database error');
    }
};

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return response.error(res, 'All fields are required', 400);
    }

    try {
        const newUser = await UserModel.createUser(name, email, password);
        return response.success(res, newUser, 'User created successfully', 201);
    } catch (err) {
        console.error(err);
        return response.error(res, 'Database error');
    }
};

module.exports = {
    getUsers,
    createUser,
};
