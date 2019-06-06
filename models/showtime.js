'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShowTime = sequelize.define('ShowTime', {
    Id: DataTypes.INTEGER
  }, {});
  ShowTime.associate = function(models) {
    // associations can be defined here
  };
  return ShowTime;
};