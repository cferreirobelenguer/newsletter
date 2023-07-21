// config.js

require('dotenv').config();

module.exports = {
    email: {
        host: process.env.EMAIL_HOST,
        secureConnection: false,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            ciphers: 'SSLv3'
        }
    }
};




