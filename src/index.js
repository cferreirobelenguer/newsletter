const express = require('express');
const fs = require('fs');
const app = express();
const port = 3500;
const nodemailer = require('nodemailer');
const config = require('../config')
var bodyParser = require('body-parser')

require('dotenv').config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.post("/send-email/",(req,res)=>{
    const {email} = req.body;
    const transporter = nodemailer.createTransport(config.email);
    const message = {
        from: process.env.FROM_EMAIL,
        to: email,
        subject: 'Newsletter Semanal',
        html: fs.readFileSync('newsletter.html', 'utf8'),
    };
    transporter.sendMail(message, function(err, info) {
        if (err) {
            //if 500 o 400 error
            console.log(err)
        } else {
            //if 200 message ok
            console.log("email enviado correctamente");
            console.log(info);
        }
    });
});

// start server
app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
});