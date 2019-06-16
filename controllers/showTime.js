'use strict';

const models = require("../models/index.js");
const utils = require('../utils/index.js');

let showTime = {}

showTime.getAll = (req, res, next) => {

    var { date, film } = req.query

    if (!film) {
        res.status(400)
        res.json({
            error: true,
            message: "Query Film not Found"
        })
    } else {
        if (!date) {
            var date = new Date()
        }

        var findOptions = {
            include: {
                model: models.ThreatreSet,
                attributes: ['id', 'name'],
                include: {
                    model: models.Threatre,
                    attributes: ['ThreatreTypeId'],


                }
            },
            attributes: ['id', 'name'],
            group: ['Threatre.ThreatreTypeId'],
        }

        models.City.findAll(findOptions)
            .then(item => {
                res.status(200)
                res.json({
                    success: true,
                    data: item,
                })
            })
            .catch(err => {
                res.status(422)
                res.json({ error: err })
            })


    }

}


module.exports = showTime