'use strict';
module.exports = (sequelize, DataTypes) => {
    const ThreatreSet = sequelize.define('ThreatreSet', {
        name: DataTypes.STRING,
        location: DataTypes.STRING
    }, {});
    ThreatreSet.associate = function(models) {
        // associations can be defined here
    };
    return ThreatreSet;
};