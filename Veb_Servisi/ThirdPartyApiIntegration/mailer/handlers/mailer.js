const mailer = require('../pkg/mailer');
const sendMail = async (req, res) => {
    let condition = 
            req.body.to && 
            req.body.to.trim().length > 0 &&
            req.body.message && 
            req.body.message.trim().length > 0 &&
            req.body.subject && 
            req.body.subject.trim().length > 0
        ;

    if (condition) {
        await mailer.send(
            req.body.to,
            req.body.subject,
            req.body.message
        );

        return res.status(200).send('ok');
    }
    return res.status(500).send('Internal server error.');
}

module.exports = {
    sendMail
}