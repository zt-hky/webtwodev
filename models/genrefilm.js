'use strict';
module.exports = (sequelize, DataTypes) => {
  const GenreFilm = sequelize.define('GenreFilm', {
    Id: DataTypes.INTEGER
  }, {});
  GenreFilm.associate = function(models) {
    // associations can be defined here
  };
  return GenreFilm;
};