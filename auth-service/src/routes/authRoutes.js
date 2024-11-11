const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validateToken = require('../middleware/authMiddleware');

// Регистрация
router.post('/register', authController.registerUser);

// Вход
router.post('/login', authController.loginUser);

// Обновление профиля
router.put('/profile', validateToken, authController.updateProfile);

module.exports = router;
