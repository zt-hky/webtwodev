'use strict';
let mail = {};

const nodemailer = require('nodemailer');
const pug = require('pug');
const path = require('path');

const transporter = nodemailer.createTransport({
    service: process.env.serviceMail,
    auth: {
        user: process.env.userMail,
        pass: process.env.passMail
    }
});

mail.send = async(email, id, uuid) => {
    var url = process.env.DOMAIN + '/etc/confirm-mail/' + id + '/' + uuid;
    var html = pug.renderFile(__dirname + '/mail/confirmMail.pug', { url: url, name: "Nguyễn Văn A" });
    var mailOptions = {
        from: process.env.userMail,
        to: email,
        subject: 'Xác nhận địa chỉ Email',
        text: url,
        html: html
    };
    await transporter.sendMail(mailOptions);
}

module.exports = mail;