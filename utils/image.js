'use strict';

var models = require('../models/index')

let image = {};

image.load = async(id) => {

    await models.Image.findOne({ where: { id } })
        .then(image => {
            if (image) {
                return image.data
            } else {
                return false
            }
        })
        .catch(e => {
            return false
        })
}

image.save = (id, file) => {

}

module.exports = image;