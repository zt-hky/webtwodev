"use strict";

const models = require("../models/index.js");
const utils = require("../utils/index.js");

let threatre = {};

threatre.getById = (req, res, next) => {
    const { id } = req.params;

    var findOptions = {
        where: { id }
    };

    models.Threatre.findOne(findOptions)
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

threatre.del = async(req, res, next) => {
    const { id } = req.params;
    var threatre = await models.threatre.findOne({ where: { id } });

    if (threatre) {
        threatre.delete = !threatre.delete;
        threatre.save();
        res.status(200);
        res.end();
    } else {
        res.status(400);
        res.end();
    }
};

threatre.getAll = (req, res, next) => {
    var findOption = utils.get.FindOption(req);
    findOption.include = [{
            model: models.ThreatreSet
        },
        {
            model: models.ThreatreType
        }
    ];
    models.Threatre.findAll(findOption)
        .then(data => {
            res.status(200);
            res.json({
                success: true,
                data
            });
        })
        .catch(e => {
            res.status(400);
            res.json({
                error: e.name
            });
        });
};

module.exports = threatre;