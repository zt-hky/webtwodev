'use strict';
module.exports = (sequelize, DataTypes) => {
    const Threatre = sequelize.define('Threatre', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        row: DataTypes.INTEGER,
        column: DataTypes.INTEGER,
        delete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {});
    Threatre.associate = function (models) {
        // associations can be defined here
        models.Threatre.belongsTo(models.ThreatreType);
        models.Threatre.belongsTo(models.ThreatreSet);
        models.Threatre.hasMany(models.ShowTime);
    };
    return Threatre;
};