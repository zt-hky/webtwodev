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

router.get('/ShowTimes/:ShowTimeId/Ticket', controller.ticket.getByShowTimeId)

router.post('/Booking', controller.booking.book)

router.get('/testABC', (req, res, next) => {
    res.status(200)
    res.json({
        user: req.user
    })
})
/* GET users listing. */

// where write controller

module.exports = router;