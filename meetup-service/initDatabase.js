// meetup-service/initDatabase.js
const sequelize = require('./config/database');
const Meetup = require('./models/meetupModel');
const MeetupAttendee = require('./models/meetupAttendeeModel');

async function initDatabase() {
    try {
        await sequelize.sync({ alter: true });
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

module.exports = initDatabase;
