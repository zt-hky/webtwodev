'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        val: DataTypes.BOOLEAN,
        uuid: DataTypes.STRING,
        delete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {});
    User.associate = function(models) {
        // associations can be defined here
        models.User.hasMany(models.Booking);
    };
    return User;
};