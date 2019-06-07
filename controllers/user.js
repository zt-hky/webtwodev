'use strict';

import db from '../models/index.js';

let controller = {}

controller.login = (req, res, next) => {
    res.status(200);
    res.setHeader('Content-Type','')
    res.send({
        success: 'true',
        message: 'test'
    });

    
};


controller.register = (req,res,next) => {
}

controller.logout = () => {

}


export default controller;