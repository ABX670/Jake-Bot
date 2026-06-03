const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
    console.log('QR RECEIVED - Scan this with your WhatsApp!');
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
      
