'use strict';
module.exports = (sequelize, DataTypes) => {
    const ThreatreSet = sequelize.define('ThreatreSet', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        delete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {});
    ThreatreSet.associate = function(models) {
        // associations can be defined here
        models.ThreatreSet.belongsTo(models.City);
        models.ThreatreSet.hasMany(models.Threatre);

    };
    return ThreatreSet;
};