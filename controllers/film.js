'use strict';

const models = require("../models/index.js");
const bcrypt = require('bcrypt');
const secret = process.env.SECRET || 'the default secret';
const jwt = require('jsonwebtoken');
const uuidv4 = require('uuid/v4');
const utils = require('../utils/index.js');

let film = {}

film.getFilm = (req, res, next) => {

    const { offset, limit } = req

};

module.exports = film;