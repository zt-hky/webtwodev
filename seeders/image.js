'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
    up: async(queryInterface, Sequelize) => {

        fs
            .readdirSync(__dirname)
            .filter(file => {
                return (file.indexOf('.') !== 0) && (file !== basename)
            })


        await queryInterface.bulkInsert('Users', result.User)

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
};