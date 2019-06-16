'use strict';

const models = require("../models/index.js");
const utils = require('../utils/index.js');

let threatreSet = {}

threatreSet.getbyCityId = (req, res, next) => {

    const { id } = req.params

    var findOptions = {
        where: { CityId: id }
    }

    models.ThreatreSet.findAll(findOptions)
        .then(item => {
            res.status(200);
            res.json({
                success: true,
                data: item,
                findOptions
            })
        })
        .catch((err) => {
            res.status(422);
            res.json({
                error: err.name
            })
        })

}


module.exports = threatreSet