'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShowTime = sequelize.define('ShowTime', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    time : DataTypes.TIME
  }, {});
  ShowTime.associate = function(models) {
    // associations can be defined here
    models.ShowTime.hasMany(models.Ticket);
    models.ShowTime.hasMany(models.Booking);
    models.ShowTime.belongsTo(models.Film);
    models.ShowTime.belongsTo(models.Threatre);
  };
  return ShowTime;
};