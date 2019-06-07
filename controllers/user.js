'use strict';

const models = require("../models/index.js");
const bcrypt = require('bcrypt');

let user = {}

user.signIn = async (req, res, next) => {
    res.status(200);
    res.setHeader('Content-Type','')
    res.json({
        success: 'true',
        message: 'test'
    });
   
};

user.signUp = async (req,res,next) => {

    // get body
    const {username,password, name, email, phone} = req.body;
    
    if ( !(username && password && name && email && phone))
    {
        res.status(400);
        res.json({
            message : "Not enough body",
            error : true
        });
        return;
    }

    // check exists username
    var users = await models.User.findOne({
        where: {id : username}
    });

    if(users){
        res.status(400);
        res.json({
            message : "Username is exists",
            error : "username"
        });
        return;
    }

    // check email
    var users = await models.User.findOne({
        where: {email}
    });

    if(users){
        res.status(400);
        res.json({
            message : "Email is exists",
            error : "email"
        });
        return;
    }

    var passwordBcrypt = bcrypt.hashSync(password,10);
    
    models.User.create({
        id : username,
        password : passwordBcrypt,
        name,
        email,
        phone
    }).
        then((result) => {
            res.status(200);
            res.json({
                message : "SignUp successful",
                error : false
            });
        })
        .catch((e)=> {
            res.status(400);
            res.json({
                message : "Error",
                error : e
            })
        })
    
}

user.signOut = (req,res,next) => {

}


module.exports =  user;