import {DataTypes } from'sequelize';
import { sequelize } from '../config/database';

const Meetup = sequelize.define('Meetup', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    tags: { type: DataTypes.ARRAY(DataTypes.STRING) },
    eventDate: { type: DataTypes.DATE },
    latitude: { type: DataTypes.FLOAT },   // Широта
    longitude: { type: DataTypes.FLOAT },  // Долгота
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});
export default Meetup;
