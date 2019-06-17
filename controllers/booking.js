'use strict';

const models = require("../models/index.js");
const utils = require('../utils/index.js');

let booking = {}

booking.getByShowTimeId = (req, res, next) => {
    var { ShowTimeId } = req.params

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
                error: err.name
            })
        })

}

module.exports = booking