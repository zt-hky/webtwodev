'use strict';


module.exports = {
    up: async(queryInterface, Sequelize) => {


        const excelToJson = require('convert-excel-to-json');
        var result = excelToJson({
            sourceFile: __dirname + "\\data.xlsx",
            range: 'A2:Z1000',
            columnToKey: {
                '*': '{{columnHeader}}'
            }
        })
        await queryInterface.bulkInsert('Users', result.User)
        await queryInterface.bulkInsert('Cities', result.City)
        await queryInterface.bulkInsert('ThreatreSets', result.ThreatreSet)
        await queryInterface.bulkInsert('ThreatreTypes', result.ThreatreType)
        await queryInterface.bulkInsert('Threatres', result.Threatre)
        await queryInterface.bulkInsert('Genreilms', result.Genreilm)
        await queryInterface.bulkInsert('Films', result.Film)
        await queryInterface.bulkInsert('Films', result.Film)
        await queryInterface.bulkInsert('Bookings', result.Booking)
        await queryInterface.bulkInsert('Tickets', result.Ticket)

        //return queryInterface.bulkInsert('Films', result.Film)
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
    }
};