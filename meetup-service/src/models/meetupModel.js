import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Meetup = sequelize.define('Meetup', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: DataTypes.TEXT,
    tags: DataTypes.ARRAY(DataTypes.STRING), 
    eventDate: DataTypes.DATE,
    latitude: DataTypes.FLOAT, //широта
    longitude: DataTypes.FLOAT, //долгота
}, {
    timestamps: true,
});

export default Meetup;
