import User from '../models/userModel.js';

export const createUser = async (userData) => {
    return await User.create(userData);
};

export const findUserByEmail = async (email) => {
    return await User.findOne({ where: { email } });
};

export const updateUser = async (userId, updatedData) => {
    await User.update(updatedData, { where: { id: userId } });
    return await User.findByPk(userId);
};
