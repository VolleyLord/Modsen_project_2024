import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    avatarUrl: DataTypes.STRING,
    bio: DataTypes.TEXT,
}, {
    tableName: 'users',
    timestamps: true,
});

export default User;
