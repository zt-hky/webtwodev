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

router.get('/user/sms', controller.user.sms);

router.get('/films', controller.film.getFilm);

// test send email
//router.post('/user/send-confirmation-mail', controller.user.sendConfirmationEmail)

// where write controller
router.get('/test', (req, res, next) => {


    const del = Boolean(req.query.delete)
    var films
    var findOptions = utils.get.FindOption(req)



    models.Film.findAll(findOptions)
        .then((item) => {
            res.status(200);
            res.json({
                success: true,
                data: item,
                findOptions
            })
        })
        .catch((err) => {
            res.status(422);
            res.json({
                err: err.name
            })
        })

    if (req.query.release) {
        release = req.query.release
        const Op = models.Sequelize.Op
        var datetime = new Date();
        if (release == "now") {
            findOptions.where.release = {
                lte: new Date()
            }
        }
        if (release == "future") {
            findOptions.where.release = {
                gt: datetime
            }
        }

    }



});

module.exports = router;