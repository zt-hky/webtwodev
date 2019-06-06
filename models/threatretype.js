'use strict';
module.exports = (sequelize, DataTypes) => {
  const ThreatreType = sequelize.define('ThreatreType', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name : DataTypes.STRING,
    content: DataTypes.STRING,
    price : DataTypes.FLOAT
  }, {});
  ThreatreType.associate = function (models) {
    // associations can be defined here
    models.ThreatreType.hasMany(models.Threatre);
  };
  return ThreatreType;
};