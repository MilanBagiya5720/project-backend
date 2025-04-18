const UsersModel = require('../models/users.model');
const response = require('../utils/response');

exports.getUsers = async (req, res) => {
    try {
        const users = await UsersModel.getAllUsers();
        return response.success(res, users, 'Users fetched successfully');
    } catch (err) {
        console.error(err);
        return response.error(res, 'Database error');
    }
};