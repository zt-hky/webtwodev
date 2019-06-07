var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');


// More require

const bcrypt = require('bcrypt');
const models = require("../models/index.js");

// End

/* GET users listing. */
router.post('/user/login', controller.user.login);

router.post('/user/signUp',controller.user.signUp);

router.post('/user/logout',controller.user.logout);

// where write controller
router.post('/test', async (req,res,next) => {
    

    

});

module.exports = router;