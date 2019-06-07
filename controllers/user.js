'use strict';

const db = require("../models/index.js");

let user = {}

user.login = (req, res, next) => {
    res.status(200);
    res.setHeader('Content-Type','')
    res.send({
        success: 'true',
        message: 'test'
    });

    
};


user.register = (req,res,next) => {
}

user.logout = () => {

}


module.exports =  user;