'use strict';

var models = require('../models/index')

let image = {};

image.load = (id) => {

    await models.Image.findOne({ where: { id } })
        .then(image => {
            if (image) {
                return image.data
            } else {

            }
        })
        .catch(e => {
            res.j
        })
}

image.save = (id, file) = {

}

module.exports = image;