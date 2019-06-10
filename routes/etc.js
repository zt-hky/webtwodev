var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');


// More require

router.get('/confirm-mail/:username/:uuid', controller.user.confirmMail);
// End

/* GET users listing. */

// where write controller

module.exports = router;