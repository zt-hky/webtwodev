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

threatreSet.getAll = (req, res, next) => {

    var findOption = utils.get.FindOption(req)

    models.ThreatreSet.findAll(findOption)
        .then(data => {
            res.status(200)
            res.json({
                success: true,
                data
            })
        })
        .catch(e => {
            res.status(400)
            res.json({
                error: e.name
            })
        })
}

threatreSet.post = (req, res, next) => {

    const { name, location, CityId } = req.body

    if (name && location && CityId) {
        models.ThreatreSet.create({ name, location, CityId })
            .then(e => {
                res.status(200)
                res.end()
            })
            .catch(e => {
                res.status(402)
                res.json({ e })
            })
    } else {
        res.status(400)
        res.end()
    }
}

module.exports = threatreSet