import 'dotenv/config';           // Подключаем переменные из .env
import express from 'express';
import sequelize from './src/config/database.js';
import meetupRoutes from './src/routes/meetupRoutes.js';  // Подключаем маршруты
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.MEETUP_SERVICE_PORT || 5001;

// Middleware для обработки JSON и cookies
app.use(express.json());
app.use(cookieParser());

// Инициализация маршрутов для митапов
app.use('/api/meetups', meetupRoutes);

// Функция запуска сервера
const startServer = async () => {
    try {
        // Синхронизация моделей с базой данных
        await sequelize.sync({ alter: true });
        console.log('Meetup models synchronized successfully.');

        // Запускаем сервер
        app.listen(PORT, () => {
            console.log(`Meetup service is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error starting Meetup service:', error);
    }
};

// Запуск сервера
startServer();
