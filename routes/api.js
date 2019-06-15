var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');

// More require

const bcrypt = require('bcrypt');
const models = require("../models/index.js");

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
router.get('/test', async(req, res, next) => {


    const del = Boolean(req.query.delete)

    var findOptions = {
        order: []
    };

    findOptions.offset = Number(req.query.offset || 0)
    findOptions.limit = Number(req.query.limit || 20)
    release = req.query.release

    if (sort = req.query.order) {
        const sort = req.query.order.split(',')
        sort.forEach(element => {
            let field = element
            let order = 'ASC'
            console.log(element)
            if (element.charAt(0) === '-') {
                order = 'DESC'
                field = element.substring(1)
            }

            findOptions.order.push([field, order])
        });
    }


    if (release) {
        if (release == 'gt') {
            findOptions.where.push()
        }
        if (release == 'lte') {

        }
    }

    var films = await models.Film.findAll(findOptions)

    res.status(200);
    res.json({
        success: true,
        data: films,
        findOptions
    })


});

module.exports = router;