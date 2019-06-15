'use strict';
module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        cost: DataTypes.FLOAT,
        delete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {});
    Booking.associate = function(models) {
        // associations can be defined here
        models.Booking.belongsTo(models.User),
            models.Booking.belongsTo(models.ShowTime),
            models.Booking.hasMany(models.Ticket)
    };
    return Booking;
};