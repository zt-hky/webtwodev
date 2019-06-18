'use strict';

const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
const utils = require('../utils/index');
Promise.promisifyAll(fs);

module.exports = {
    up: async(queryInterface, Sequelize) => {

        fs
            .readdirSync(__dirname + '/image/')
            .filter(file => {
                return (file.indexOf('.') !== 0)
            })
            .forEach(async file => {

                var id_key = file.split('.')[0]

                var path = __dirname + '\\image\\' + file

                await utils.image.save(path, id_key)
            })

    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Images', null, {})
            /*
              Add reverting commands here.
              Return a promise to correctly handle asynchronicity.

              Example:
              return queryInterface.bulkDelete('People', null, {});
            */
    }
}