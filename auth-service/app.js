import 'dotenv/config';  // Подключаем переменные из .env
import express from 'express';
import sequelize from './src/config/database.js';
import initDatabase from './initDatabase.js';
import authRoutes from './src/routes/authRoutes.js';  // Подключаем маршруты
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware для обработки JSON
app.use(express.json());

// Инициализация маршрутов
app.use('/api/auth', authRoutes);

app.use(cookieParser());  // Middleware для работы с cookies

// Функция запуска сервера
const startServer = async () => {
    try {
        // Инициализируем базу данных
        await initDatabase();
        console.log('Database initialized');

        // Синхронизация моделей
        await sequelize.sync({ alter: true });
        console.log('All models were synchronized successfully.');

        // Запускаем сервер
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
};

// Запуск сервера
startServer();
