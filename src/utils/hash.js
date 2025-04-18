const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash);
};

module.exports = { hashPassword, comparePassword };
