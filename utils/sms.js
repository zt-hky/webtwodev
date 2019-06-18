'use strict';
let sms = {};

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: '3db60d73',
    apiSecret: 'WVBHayduRIAha8OW'
});


sms.send = (to, mess) => {
    nexmo.message.sendSms('WebTwoDevCinema', to, mess);
}

module.exports = sms;