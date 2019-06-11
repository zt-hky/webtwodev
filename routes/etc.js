var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');

const Nexmo = require('nexmo');

// More require

router.get('/confirm-mail/:username/:uuid', controller.user.confirmMail);
// End

router.post('/sendSMS', (req, res, next) => {
        const { from, to, message } = req.body;

        const nexmo = new Nexmo({
            apiKey: '3db60d73',
            apiSecret: 'WVBHayduRIAha8OW'
        });

        nexmo.message.sendSms(from, to, message);
        res.send("Đã gửi");

    })
    /* GET users listing. */

// where write controller

module.exports = router;