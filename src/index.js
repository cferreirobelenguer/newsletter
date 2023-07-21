const express = require('express');
const fs = require('fs');
const app = express();
const port = 3500;
const nodemailer = require('nodemailer');
const config = require('../config')

// start server
app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
});

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

const transporter = nodemailer.createTransport(config.email);
async function sendNewsletter() {
    try {
        //html email
        const htmlContent = fs.readFileSync('newsletter.html', 'utf8');
    // email options
    const mailOptions = {
        from: 'frontend-developer22@outlook.com',
        to: 'carolferreirobelenguer@gmail.com',
        subject: 'Newsletter Semanal',
        html: htmlContent,
    };
      // send email
        const info = await transporter.sendMail(mailOptions);
            console.log('Email enviado:', info.messageId);
        } catch (error) {
            console.error('Error al enviar el email:', error);
        }
    }

    sendNewsletter();