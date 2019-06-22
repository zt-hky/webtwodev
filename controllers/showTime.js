"use strict";

const models = require("../models/index.js");
const utils = require("../utils/index.js");

let showTime = {};

showTime.getByDateFilmThreatreSet = (req, res, next) => {
    var { date, FilmId, ThreatreSetId } = req.query;

    if (!date) {
        date = new Date();
    }

    var findOptions = {
        where: {
            FilmId
        },
        include: {
            model: models.Threatre,
            where: { ThreatreSetId },
            attributes: ["ThreatreTypeId"]
        },
        order: [
            ["time", "ASC"]
        ]
    };

    models.ShowTime.findAll(findOptions)
        .then(item => {
            res.status(200);
            res.json({
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

showTime.getAll = (req, res, next) => {
    var { date, film } = req.query;

    if (!film) {
        res.status(400);
        res.json({
            error: true,
            message: "Query Film not Found"
        });
    } else {
        if (!date) {
            var date = new Date();
        }

        var findOptions = {
            include: {
                model: models.ThreatreSet,
                attributes: ["id", "name"],
                include: {
                    model: models.Threatre,
                    attributes: ["ThreatreTypeId"]
                }
            },
            attributes: ["id", "name"],
            group: ["Threatre.ThreatreTypeId"]
        };

        models.City.findAll(findOptions)
            .then(item => {
                res.status(200);
                res.json({
                    success: true,
                    data: item
                });
            })
            .catch(err => {
                res.status(422);
                res.json({ error: err });
            });
    }
};

showTime.getAll2 = async(req, res, next) => {
    var findOptions = utils.get.FindOption(req);

    findOptions.include = [{
            model: models.Film
        },
        {
            model: models.Threatre,
            include: {
                model: models.ThreatreSet
            }
        }
    ];

    models.ShowTime.findAll(findOptions)
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

showTime.del = async(req, res, next) => {
    const { id } = req.params;
    var Film = await models.ShowTime.findOne({ where: { id } });

    if (Film) {
        Film.delete = !Film.delete;
        Film.save();
        res.status(200);
        res.end();
    } else {
        res.status(400);
        res.end();
    }
};

module.exports = showTime;