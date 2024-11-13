require('dotenv').config(); // Подключаем переменные из .env
const express = require('express');
const sequelize = require('./src/config/database');
const initDatabase = require('./initDatabase');
const authRoutes = require('./src/routes/authRoutes'); // Подключаем маршруты

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware для обработки JSON
app.use(express.json());

// Инициализация маршрутов
app.use('/api/auth', authRoutes);

// Функция запуска сервера
async function startServer() {
    try {
        // Инициализируем базу данных
        await initDatabase();
        console.log('Database initialized');

        (async () => {
            await sequelize.sync({ alter: true });
            console.log('All models were synchronized successfully.');
        })();
        
        // Запускаем сервер
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
}

// Запуск сервера
startServer();


// const express = require('express');
// const sequelize = require('./src/config/database');
// const initDatabase = require('./src/initDatabase'); // Импорт инициализации базы данных
// const authRoutes = require('./src/routes/authRoutes');
// const app = express();

// app.use(express.json());
// app.use('/auth', authRoutes);

// // Инициализация базы данных и синхронизация моделей
// (async () => {
//     await sequelize.sync({ alter: true });
//     console.log('All models were synchronized successfully.');
// })();

// app.listen(process.env.PORT || 5000, () => {
//     console.log(`Server running on port ${process.env.PORT || 5000}`);
// });
