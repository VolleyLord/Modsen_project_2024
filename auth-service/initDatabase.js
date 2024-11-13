import sequelize from './src/config/database.js';
import User from './src/models/userModel.js';

async function initDatabase() {
    try {
        await sequelize.sync({ alter: true });
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

export default initDatabase;
