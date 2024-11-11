const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./userModel');
const Meetup = require('./meetupModel');

const MeetupAttendee = sequelize.define('MeetupAttendee', {
    meetupId: { type: DataTypes.INTEGER, references: { model: Meetup, key: 'id' }, primaryKey: true },
    userId: { type: DataTypes.INTEGER, references: { model: User, key: 'id' }, primaryKey: true }
});

// Связь многие ко многим между Meetup и User через MeetupAttendee
Meetup.belongsToMany(User, { through: MeetupAttendee, foreignKey: 'meetupId' });
User.belongsToMany(Meetup, { through: MeetupAttendee, foreignKey: 'userId' });

module.exports = MeetupAttendee;
