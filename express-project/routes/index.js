const express = require('express');
const router = express.Router();
const net = require('net');
const client = new net.Socket();

const HOST = 'localhost';
const PORT = 9000;

router.get('/message', (req, res) => {
  res.render('index', {result: ''})
});

router.post('/message', (req, res) => {

    let message = req.body.message;

    client.connect({port: PORT, host: HOST}, function() {
        console.log('CONNECTED TO: ' + HOST + ':' + PORT);
        client.write(message);
    });

    client.on('data', function(data) {
        console.log('DATA: ' + data);
        res.render('index', {result: data});
        client.destroy();
    });

    client.on('close', function() {
        console.log('Connection closed');
    });
});

module.exports = router;
