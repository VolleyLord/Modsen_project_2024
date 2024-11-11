const User = require('../models/userModel');

exports.createUser = async (userData) => {
    return await User.create(userData);
};

exports.findUserByEmail = async (email) => {
    return await User.findOne({ where: { email } });
};

exports.updateUser = async (userId, updatedData) => {
    await User.update(updatedData, { where: { id: userId } });
    return await User.findByPk(userId);
};
