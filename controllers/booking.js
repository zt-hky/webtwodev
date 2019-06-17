'use strict';

const models = require("../models/index.js");
const utils = require('../utils/index.js');

let booking = {}


booking.getByShowTimeId = (req, res, next) => {

    const { ShowTimeId } = req.params

    var findOption = {
        where: {
            ShowTimeId
        }
    }

    models.Booking.findAll(findOption)
        .then(item => {
            res.status(200);
            res.json({
                success: true,
                data: item,
            })
        })
        .catch((err) => {
            res.status(422);
            res.json({
                error: err.name,
                findOption,

            })
        })

}

booking.book = async (req, res, next) => {

    const user = req.user
    const { seats, ShowTimeId } = req.body

    var check


    if (!seats || !ShowTimeId) {
        res.status(400)
        res.end()
        return
    }

    const lstSeat = seats.split(',');

    // Get Maximum number col and row
    const InfoThreatre = await models.Threatre.findOne({
        include: [{
            model: models.ShowTime,
            where: { id: ShowTimeId },
            attributes: []
        },
        {
            model: models.ThreatreType,
            attributes: ['price']
        }

        ],
        attributes: ['row', 'column', 'ThreatreTypeId']

    })

    check = true
    lstSeat.forEach(seat => {
        var row = seat.charCodeAt(0) - 64
        var col = parseInt(seat.substr(1))

        console.log("Row :: " + row + "   col :: " + col);
        if (seat == "" ||
            isNaN(col) ||
            row < 1 || col < 1 ||
            row > InfoThreatre.row ||
            col > InfoThreatre.column
        ) {
            check = false
        }
    });

    if (check == false) {
        res.status(400),
            res.end()
        return
    }


    models.sequelize.transaction(async (t) => {

        check = true

        lstSeat.forEach(async seat => {
            var row = seat.charAt(0)
            var column = parseInt(seat.substr(1, 2))

            var Ticket = await models.Ticket.findOne({
                where: { ShowTimeId, row, column },
                transaction: t,
                lock: true,
            })

            if (Ticket) {
                check = false
            }

        })

        if (check == false) {
            throw new Error("Ge da co nguoi dat")
        }


        var cost = lstSeat.length * InfoThreatre.ThreatreType.price
        var booking = await models.Booking.create(
            {
                cost,
                UserEmail: user.email,
                ShowTimeId
            },
            { transaction: t }
        )

        // if (!booking) {
        //     throw new Error("Khong tao duoc booking");
        //     return
        // }

        await lstSeat.forEach(async seat => {
            var row = seat.charCodeAt(0)
            var column = parseInt(seat.substr(1, 2))
            await models.Ticket.create(
                { row, column, ShowTimeId, BookingId: booking.id },
                { transaction: t })

        })

        return booking
    })
        .then(result => {
            res.status(200)
            res.json({
                success: true
            })
        })
        .catch(err => {
            res.status(406)
            res.json({
                error: err.name
            })
        })

}


module.exports = booking