import express from 'express';  // импортируем express как default export

const router = express.Router();
import authController from '../controllers/authController.js';
import validateToken from '../middleware/authMiddleware.js';

// Регистрация
router.post('/register', authController.registerUser);

// Вход
router.post('/login', authController.loginUser);

// Обновление профиля
router.put('/profile', validateToken, authController.updateProfile);

export default router;
