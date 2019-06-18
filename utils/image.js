'use strict';
var sharp = require('sharp')
var models = require('../models/index')

let image = {};

image.load = async(id_key) => {

    var image = await models.Image.findOne({ where: { id_key } })

    if (image) {
        return image.data
    }
    return false
}

image.save = async(path, id_key) => {

    const data = await sharp(path)
        .jpeg({ quality: 80 })
        .toBuffer()
    var rs = await models.Image.create({ id_key, data })
    if (rs) {
        console.log("oke");
        return rs
    } else {
        console.log("no");
        return false
    }
}

module.exports = image;