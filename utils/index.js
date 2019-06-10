'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const utils = {};


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var name = file.replace('.js','');
    const controller = require(__dirname + '/' + file);
    utils[name] =controller;
  });



module.exports = utils;
