const express = require('express');
const fs = require('fs');
const app = express();
const port = 3500;
const nodemailer = require('nodemailer');

// Iniciar el servidor
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

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
        user: "frontend-developer22@outlook.com",
        pass: "FrontendDeveloper"
    },
    tls: {
        ciphers:'SSLv3'
    }
});

async function sendNewsletter() {
    try {
        //html email
        const htmlContent = fs.readFileSync('index.html', 'utf8');
    // Configura el email
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