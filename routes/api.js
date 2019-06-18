var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');

// More require

const bcrypt = require('bcrypt');
const models = require("../models/index.js");
const utils = require("../utils/index");
// End

/* GET users listing. */
router.post('/user/signIn', controller.user.signIn);

router.post('/user/signUp', controller.user.signUp);

router.post('/user/signOut', controller.user.signOut);

router.post('/user/forget', controller.user.forget);

router.post('/user/changePassForget', controller.user.changePassForget);


router.get('/films', controller.film.getFilm);

router.get('/films/:id', controller.film.getFilmbyId);

router.get('/cities', controller.city.getAll)

router.get('/cities/:id', controller.city.getById)

router.get('/cities/:id/threatreSet', controller.threatreSet.getbyCityId)

// Login admin

router.post('/admin/signIn', controller.admin.signIn);

router.get('/showTimesDFS', controller.showTime.getByDateFilmThreatreSet)
    // test send email
    //router.post('/user/send-confirmation-mail', controller.user.sendConfirmationEmail)

// where write controller
router.get('/test', (req, res, next) => {});

module.exports = router;