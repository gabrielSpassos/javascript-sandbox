#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://admin:admin@localhost:5672', (connectionError, connection) => {
    if (connectionError) {
        throw connectionError;
    }
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError;
        }
        let queue = 'basic-node-events';

        channel.assertQueue(queue, {
            durable: false
        });
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
        channel.consume(queue, (msg) => {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});