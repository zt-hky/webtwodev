'use strict';
module.exports = (sequelize, DataTypes) => {
  const GenreFilm = sequelize.define('GenreFilm', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING
  }, {});
  GenreFilm.associate = function(models) {
    // associations can be defined here
      models.GenreFilm.hasMany(models.Film);
  };
  return GenreFilm;
};