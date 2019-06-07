'use strict';
module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define('City', {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.STRING,
    }, {});
    City.associate = function(models) {
        // associations can be defined here
        models.City.hasMany(models.ThreatreSet);
    };
    return City;
};