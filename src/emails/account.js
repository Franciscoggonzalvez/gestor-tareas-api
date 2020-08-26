const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'frang.gonzalvez@gmail.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}, let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'frang.gonzalvez@gmail.com',
        subject: 'Account cancelled',
        text: `Goobye ${name}, I hope to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
