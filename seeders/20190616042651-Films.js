'use strict';


module.exports = {
    up: async(queryInterface, Sequelize) => {


        const excelToJson = require('convert-excel-to-json');
        var result = excelToJson({
            sourceFile: __dirname + "\\Data_WEB_TWO.xlsx",
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
        await queryInterface.bulkInsert('GenreFilms', result.GenreFilm)
        await queryInterface.bulkInsert('Films', result.Film)
        await queryInterface.bulkInsert('ShowTimes', result.ShowTime)

        await queryInterface.bulkInsert('Bookings', result.Booking)
        await queryInterface.bulkInsert('Tickets', result.Ticket)

    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Tickets', null, {})
        await queryInterface.bulkDelete('Bookings', null, {})
        await queryInterface.bulkDelete('ShowTimes', null, {})
        await queryInterface.bulkDelete('Films', null, {})
        await queryInterface.bulkDelete('GenreFilms', null, {})
        await queryInterface.bulkDelete('Threatres', null, {})
        await queryInterface.bulkDelete('ThreatreTypes', null, {})
        await queryInterface.bulkDelete('ThreatreSets', null, {})
        await queryInterface.bulkDelete('Cities', null, {})
        await queryInterface.bulkDelete('Users', null, {})
            /*
              Add reverting commands here.
              Return a promise to correctly handle asynchronicity.

              Example:
              return queryInterface.bulkDelete('People', null, {});
            */
    }
};