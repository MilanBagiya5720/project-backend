const UserModel = require('../models/user.model');
const response = require('../utils/response');

exports.getUserProfile = async (req, res) => {
    try {
        const user = await UserModel.getUserById(req.user.id);
        return response.success(res, user, 'User profile fetched successfully');
    } catch (err) {
        console.error(err);
        return response.error(res, 'Database error');
    }
};

exports.getUserByEmail = async (req, res) => {
    try {
        const user = await UsersModel.getUserByEmail(req.params.email);
        return response.success(res, user, 'User fetched successfully');
    } catch (err) {
        console.error(err);
        return response.error(res, 'Database error');
    }
};