const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');
const { JWT_SECRET } = process.env;

exports.registerUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await userRepository.createUser({ ...userData, password: hashedPassword });
    return { id: user.id, email: user.email };
};

exports.loginUser = async ({ email, password }) => {
    const user = await userRepository.findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid credentials');
    }
    return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
};

exports.updateProfile = async (userId, newProfileData) => {
    return await userRepository.updateUser(userId, newProfileData);
};
