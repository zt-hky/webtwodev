'use strict';

const models = require("../models/index.js");
const bcrypt = require('bcrypt');

let user = {}

user.signIn = async(req, res, next) => {
    res.status(200);
    res.setHeader('Content-Type', '')
    res.json({
        success: 'true',
        message: 'test'
    });

};

user.signUp = async(req, res, next) => {

    // get body
    const { username, password, name, email, phone } = req.body;

    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var strongPasswordRegex = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
    var vnPhoneNumberRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (!(username && password && name && email && phone) ||
        !emailRegex.test(email) ||
        !strongPasswordRegex.test(password) ||
        !vnPhoneNumberRegex.test(phone)
    ) {
        res.status(400);
        res.json({
            message: "Unqualified body",
            error: true
        });
        return;
    }


    // check exists username
    var users = await models.User.findOne({
        where: { id: username }
    });

    if (users) {
        res.status(400);
        res.json({
            message: "Username is exists",
            error: "username"
        });
        return;
    }

    // check email
    var users = await models.User.findOne({
        where: { email }
    });

    if (users) {
        res.status(400);
        res.json({
            message: "Email is exists",
            error: "email"
        });
        return;
    }

    var passwordBcrypt = bcrypt.hashSync(password, 10);

    models.User.create({
        id: username,
        password: passwordBcrypt,
        name,
        email,
        phone
    }).
    then((result) => {
            res.status(200);
            res.json({
                message: "SignUp successful",
                error: false
            });
        })
        .catch((e) => {
            res.status(400);
            res.json({
                message: "Error",
                error: e
            })
        })

}

user.signOut = (req, res, next) => {

}


module.exports = user;