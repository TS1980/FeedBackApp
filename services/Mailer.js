const sendGrig = require('sendgrid');
const helper = sendGrig.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    constructor({subject, receivers}, content) {
        // else this.props = undefined 
        super();

        this.sendgApi = sendGrig(keys.sendGridKey);
        //от кого
        this.from_email = new helper.Email('no-reply@emaily.com');
        //тема
        this.subject = subject;
        //суть
        this.body = new helper.Content('text/html', content);
        //array of obj - состоит из почт получателей
        this.receivers = this.formatAddresses(receivers);

        this.addContent(this.body);
        this.addClickTraking();
        //из получателя в хелпер имейл {adding}
        this.addReceivers();
    }
    formatAddresses(receivers){
        return receivers.map(({ email }) => {
            return new helper.Email(email);
        });
    }

    addClickTraking(){
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);
        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addReceivers(){
        const person = new helper.Personalization();
        this.receivers.forEach(receiver => {
            person.addTo(receiver);
        });
        this.addPersonalization(person);
    }

    async send(){
        const request = this.sendgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });
        const response = this.sendgApi.API(request);
        return response;
    }
}

module.exports = Mailer;