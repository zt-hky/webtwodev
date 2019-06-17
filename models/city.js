'use strict';
module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define('City', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        delete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {});
    City.associate = function(models) {
        // associations can be defined here
        models.City.hasMany(models.ThreatreSet);
    };
    return City;
};