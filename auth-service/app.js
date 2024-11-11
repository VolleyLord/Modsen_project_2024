const express = require('express');
const initDatabase = require('./initDatabase');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// Подключаем маршруты
app.use('/users', userRoutes);

// Инициализация базы данных
initDatabase();

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Auth service running on port ${PORT}`);
});
