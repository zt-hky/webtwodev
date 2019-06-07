var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');


/* GET users listing. */
router.get('/login', controller.user.login);


module.exports = router;