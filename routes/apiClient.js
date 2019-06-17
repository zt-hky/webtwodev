var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');


// More require

const bcrypt = require('bcrypt');
const models = require("../models/index.js");

// End


// router.get('/test', (req, res, next) => {
//     res.json(req.user);
// })

router.get('/ShowTimes/:id/Booking', controller.booking.getByShowTimeId)

/* GET users listing. */

// where write controller

module.exports = router;