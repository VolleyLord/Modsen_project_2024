import * as authService from '../services/authService.js';

 const registerUser = async (req, res) => {
    try {
        const user = await authService.registerUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

 const loginUser = async (req, res) => {
    try {
        const token = await authService.loginUser(req.body);
        res.cookie('token', token, { httpOnly: true, maxAge: 604800000 }); // 7 days in ms
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

 const logoutUser = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
};

const updateProfile = async (req, res) => {
    try {
        const updatedUser = await authService.updateProfile(req.user.id, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export default {
    registerUser,
    loginUser,
    logoutUser,
    updateProfile
};
