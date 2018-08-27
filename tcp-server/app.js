const net = require('net');

const HOST = 'localhost';
const PORT = 9000;

net.createServer(function(sock) {

    console.log('Connected to client on: ' + sock.remoteAddress +':'+ sock.remotePort);

    sock.on('data', function(data) {

        console.log('DATA: ' + data);
        //Send to client
        sock.write('You said "' + data + '"');

    });

    sock.on('close', function(data) {
        console.log('Closed client on: ' + sock.remoteAddress +':'+ sock.remotePort);
    });

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);

