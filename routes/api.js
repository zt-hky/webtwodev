var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');


/* GET users listing. */
router.post('/user/login', controller.user.login);

router.post('user/register',controller.user.register);

router.post('user/logout',controller.user.logout);


router.post('writeApi/inHere/dontExcute', (req,res,next) => {
    
    const {username, email, password, phone} = req.body;

    



})

module.exports = router;