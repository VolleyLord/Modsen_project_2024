const sequelize = require('./src/config/database');
const User = require('./src/models/userModel');
const Profile = require('./src/models/profileModel');

async function initDatabase() {
    try {
        await sequelize.sync({ alter: true });
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

module.exports = initDatabase;
