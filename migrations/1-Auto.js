'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Cities", deps: []
 * createTable "ThreatreSets", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "Auto",
    "created": "2019-05-27T16:23:51.612Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Cities",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "ThreatreSets",
            {

            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
