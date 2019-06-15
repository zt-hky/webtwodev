'use strict';
module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('Ticket', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        row: DataTypes.CHAR,
        column: DataTypes.INTEGER,
        delete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }

    }, {});
    Ticket.associate = function(models) {
        // associations can be defined here
        models.Ticket.belongsTo(models.ShowTime);
        models.Ticket.belongsTo(models.Booking);
    };
    return Ticket;
};