'use strict';

const models = require("../models/index.js");
const utils = require('../utils/index.js');

let threatre = {}

threatre.getById = (req, res, next) => {

    const { id } = req.params

    var findOptions = {
        where: { id }
    }

    models.Threatre.findOne(findOptions)
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


module.exports = threatre