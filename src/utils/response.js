const success = (res, data = {}, message = 'Success', statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
};

const error = (res, message = 'Something went wrong', statusCode = 500, data = {}) => {
    return res.status(statusCode).json({
        success: false,
        message,
        error: data
    });
};

module.exports = {
    success,
    error
};
