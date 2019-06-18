'use strict';
module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
        username: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        delete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {});
    Admin.associate = function(models) {
        // associations can be defined here
    };
    return Admin;
};