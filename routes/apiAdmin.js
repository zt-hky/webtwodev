var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');


// More require


router.get('/threatreSets', controller.threatreSet.getAll)
    // End

/* GET users listing. */

// where write controller

module.exports = router;