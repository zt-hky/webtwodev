'use strict';
module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        id_key: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        data: DataTypes.BLOB

    }, {});
    Image.associate = function(models) {};
    return Image;
};