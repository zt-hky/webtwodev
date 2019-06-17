'use strict';

const models = require("../models/index.js");
const utils = require('../utils/index.js');

let ticket = {}

ticket.getByShowTimeId = (req, res, next) => {

    const { ShowTimeId } = req.params


    var findOption = {
        where: {
            ShowTimeId
        },
        attributes: ['row', 'column']
    }

    models.Ticket.findAll(findOption)
        .then(item => {
            res.status(200);
            res.json({
                success: true,
                data: item,
            })
        })
        .catch((err) => {
            res.status(422);
        })
}

module.exports = ticket