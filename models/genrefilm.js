'use strict';
module.exports = (sequelize, DataTypes) => {
    const GenreFilm = sequelize.define('GenreFilm', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.STRING,
        delete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {});
    GenreFilm.associate = function(models) {
        // associations can be defined here
        models.GenreFilm.hasMany(models.Film);
    };
    return GenreFilm;
};