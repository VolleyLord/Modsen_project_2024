const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./userModel');

const Profile = sequelize.define('Profile', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    avatarUrl: { type: DataTypes.STRING },
    bio: { type: DataTypes.TEXT },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

// Связываем Profile с User (1 к 1)
Profile.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

module.exports = Profile;
