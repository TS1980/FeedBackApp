const sendGrig = require('sendgrid');
const helper = sendGrig.mail;

class Mailer extends helper.Mail {

}

module.exports = Mailer;