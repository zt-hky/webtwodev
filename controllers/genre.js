"use strict";

const models = require("../models/index.js");
const utils = require("../utils/index.js");

let genre = {};

genre.getAll = async(req, res, next) => {
    var findOptions = utils.get.FindOption(req);

    models.GenreFilm.findAll(findOptions)
        .then(item => {
            res.status(200);
            res.json({
                success: true,
                data: item
            });
        })
        .catch(err => {
            res.status(422);
            res.json({
                error: err.name
            });
        });
};

genre.del = async(req, res, next) => {
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

module.exports = genre;