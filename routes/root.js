var express = require('express')
var router = express.Router()
var utils = require('../utils/index')

// More require

// End


// router.get('/test', (req, res, next) => {
//     res.json(req.user);
// })


router.get('/images/:id.jpg', async(req, res, next) => {

        const { id } = req.params
        var image = await utils.image.load(id)
        console.log(image)
        if (image) {
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.end(image, 'binary');
        } else {
            res.status(404);
            res.end()
        }

    })
    /* GET users listing. */

// where write controller

module.exports = router;