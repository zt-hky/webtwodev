const nodemailer = require('nodemailer');
const MAIL_CONFIG = require('../../constant');

function sendMail(clientEmails, mailSubject, htmlMailContent) {
    var transporter = nodemailer.createTransport(MAIL_CONFIG);
    var mailOptions = {
        from: MAIL_CONFIG.auth.user,
        to: clientEmails.join(','),
        subject: mailSubject,
        html: htmlMailContent
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent:' + info.response);;
        }
    });
}
module.exports = sendMail;