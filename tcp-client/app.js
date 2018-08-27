const net = require('net');

const HOST = 'localhost';
const PORT = 9000;

const client = new net.Socket();

client.connect({port: PORT, host: HOST}, function() {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('Gabriel Passos');
});

client.on('data', function(data) {
    console.log('DATA: ' + data);
    client.destroy();
});

client.on('close', function() {
    console.log('Connection closed');
});
