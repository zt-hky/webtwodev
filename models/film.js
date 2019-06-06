'use strict';
module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    poster: DataTypes.STRING,
    content: DataTypes.TEXT,
    release: DataTypes.DATEONLY,
    runtime: DataTypes.INTEGER,
    studio : DataTypes.STRING
  }, {});
  Film.associate = function(models) {
    // associations can be defined here
    models.Film.belongsTo(models.GenreFilm),
    models.Film.hasMany(models.ShowTime)
  };
  return Film;
};