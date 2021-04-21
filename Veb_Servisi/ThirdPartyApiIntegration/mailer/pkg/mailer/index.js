const formData = require('form-data');
const Mailgun = require('mailgun.js');
const config = require('../config');

const send = async (to,subject,message) => {
    // inicijalen setup na servisot
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
        username: config.get('mailer').username,
        key: config.get('mailer').api_key 
    });    

    // ja kreirame porakata
    try {
        let send = await mg.messages.create(config.get('mailer').domain,
        {
            from: config.get('mailer').from,
            to: to,
            subject: subject,
            text: message
        }
      );
      console.log(send);
    } catch (err) {
        console.log(err);
    }
    
};

module.exports = {
    send
}

