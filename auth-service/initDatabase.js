const sequelize = require('./config/database');
const User = require('./models/userModel');
const Profile = require('./models/profileModel');

async function initDatabase() {
    try {
        await sequelize.sync({ alter: true });
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

module.exports = initDatabase;
