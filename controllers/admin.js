'use strict';

const models = require("../models/index.js");
const bcrypt = require('bcrypt');
const secret = process.env.SECRET || 'the default secret';
const jwt = require('jsonwebtoken');
const uuidv4 = require('uuid/v4');
const utils = require('../utils/index.js');

let admin = {}



admin.signIn = async(req, res, next) => {

    const { username, password } = req.body;

    var admin = await models.Admin.findOne({
        where: { username }
    });

    if (username && bcrypt.compareSync(password, admin.password)) {
        const payload = {
            username: admin.username
        }
        jwt.sign(payload, secret, { expiresIn: 24 * 60 * 60 }, (err, token) => {
            if (err) {
                res.status(500),
                    res.json({
                        err: true,
                        message: "Error signing token",
                        raw: err
                    });
            } else {
                res.status(200),
                    res.json({
                        token: token,
                        message: "Successfuly",
                    })
            }
        });
    } else {
        res.status(400);
        res.json({
            error: true,
            message: "email or password is incorrect",
        })
    }

};

admin.signUp = async(req, res, next) => {

    console.log(req.body);


    // get body
    const { password, name, email, phone } = req.body;

    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var strongPasswordRegex = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
    var vnPhoneNumberRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (!(password && name && email && phone) ||
        !emailRegex.test(email) ||
        !strongPasswordRegex.test(password) ||
        !vnPhoneNumberRegex.test(phone)
    ) {
        console.log("Unqualified body");

        res.status(400);
        res.json({
            message: "Unqualified body",
            error: true
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
    var uuid = uuidv4();

    // Send Email 
    utils.mail.send(email, name, uuid);

    models.User.create({
        email,
        password: passwordBcrypt,
        name,
        phone,
        val: false,
        uuid,
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

admin.signOut = (req, res, next) => {

}




module.exports = admin