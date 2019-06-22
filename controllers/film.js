"use strict";

const models = require("../models/index.js");
const bcrypt = require("bcrypt");
const secret = process.env.SECRET || "the default secret";
const uuidv4 = require("uuid/v4");
const utils = require("../utils/index.js");

let film = {};

film.getFilm = (req, res, next) => {
    var findOptions = utils.get.FindOption(req);

    if (req.query.release) {
        var release = req.query.release;
        const { Op } = models.Sequelize;
        var datetime = new Date();
        if (release == "now") {
            findOptions.where.release = {
                [Op.lte]: new Date()
            };
        }
        if (release == "soon") {
            findOptions.where.release = {
                [Op.gt]: datetime
            };
        }
    }
    findOptions.include = [{
        model: models.GenreFilm
    }];
    models.Film.findAll(findOptions)
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

film.getFilmbyId = (req, res, next) => {
    const { id } = req.params;

    models.Film.findOne({ where: { id }, include: { model: models.GenreFilm } })
        .then(item => {
            if (item) {
                res.status(200);
                res.json({
                    success: true,
                    data: item
                });
            } else {
                res.status(400);
                res.json({
                    error: true,
                    message: "films is not exist"
                });
            }
        })
        .catch(err => {
            res.status(422);
            res.json({
                error: err.name
            });
        });
};

film.del = async(req, res, next) => {
    const { id } = req.params;
    var Film = await models.Film.findOne({ where: { id } });

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

module.exports = film;