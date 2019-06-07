'use strict';

module.exports.login = (req, res, next) => {
    res.status(200);

    res.send({
        success: 'true',
        message: 'test'
    })
}