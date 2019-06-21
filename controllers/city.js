"use strict";

const models = require("../models/index.js");
const utils = require("../utils/index.js");

let city = {};

city.getAll = async(req, res, next) => {
    var findOptions = utils.get.FindOption(req);

    models.City.findAll(findOptions)
        .then(item => {
            res.status(200);
            res.json({
                success: true,
                data: item,
                findOptions
            });
        })
        .catch(err => {
            res.status(422);
            res.json({
                findOptions,
                error: err.name
            });
        });
};

city.getById = (req, res, next) => {
    const { id } = req.params;
    var findOptions = {
        where: {}
    };

    findOptions.where.id = id;

    models.City.findAll(findOptions)
        .then(item => {
            res.status(200);
            res.json({
                success: true,
                data: item,
                findOptions
            });
        })
        .catch(err => {
            res.status(422);
            res.json({
                error: err.name
            });
        });
};

city.del = async(req, res, next) => {
    const { id } = req.params;
    var city = await models.City.findOne({ where: { id } });

    if (city) {
        city.delete = !city.delete;
        city.save();
        res.status(200);
        res.end();
    } else {
        res.status(400);
        res.end();
    }
};

module.exports = city;