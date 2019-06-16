'use strict';

const models = require("../models/index.js");
const utils = require('../utils/index.js');

let city = {}

city.getAll = async(req, res, next) => {

    var findOptions = utils.get.FindOption(req)


    models.City.findAll(findOptions)
        .then((item) => {
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
                findOptions,
                error: err.name
            })
        })
}

city.getById = (req, res, next) => {

    const { id } = req.params
    var findOptions = {
        where: {}
    }

    findOptions.where.id = id

    models.City.findAll(findOptions)
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


module.exports = city;