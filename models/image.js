'use strict';
module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        id_key: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        group: DataTypes.STRING,
        id: DataTypes.STRING,
        sub: DataTypes.INTEGER,
        time: DataTypes.TIME,
        delete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {});
    Image.associate = function(models) {};
    return Image;
};