'use strict';

const models = require("../models/index.js");
const bcrypt = require('bcrypt');
const secret = process.env.SECRET || 'the default secret';
const jwt = require('jsonwebtoken');
const uuidv4 = require('uuid/v4');
const utils = require('../utils/index.js');

let film = {}

film.getFilm = (req, res, next) => {

    console.log("Oke controller");
    var findOptions = utils.get.FindOption(req)

    if (req.query.release) {
        var release = req.query.release
        const { Op } = models.Sequelize;
        var datetime = new Date();
        if (release == "now") {
            findOptions.where.release = {
                [Op.lte]: new Date()
            }
        }
        if (release == "soon") {
            findOptions.where.release = {
                [Op.gt]: datetime
            }
        }
    }
    findOptions.include = [{
        model: models.GenreFilm,
        a
    }]
    models.Film.findAll(findOptions)
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
                err: err.name
            })
        })
};


film.getFilmbyId = (req, res, next) => {

}

module.exports = film;