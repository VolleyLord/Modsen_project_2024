import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as userRepository from '../repositories/userRepository.js';

const { JWT_SECRET, SALT_ROUNDS, SESSION_EXPIRY } = process.env;

export const registerUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, parseInt(SALT_ROUNDS));
    const user = await userRepository.createUser({ ...userData, password: hashedPassword });
    return { id: user.id, email: user.email };
};

export const loginUser = async ({ email, password }) => {
    const user = await userRepository.findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid credentials');
    }
    return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: SESSION_EXPIRY });
};

export const updateProfile = async (userId, newProfileData) => {
    return await userRepository.updateUser(userId, newProfileData);
};
