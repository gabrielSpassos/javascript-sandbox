#!/usr/bin/env node

const amqp = require('amqplib/callback_api');

amqp.connect('amqp://admin:admin@localhost:5672', (connectionError, connection) => {
    if (connectionError) {
        throw connectionError;
    }
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError;
        }
        let queue = 'basic-node-events';
        let message = 'Basic event';

        channel.assertQueue(queue, {
            durable: false
        });

        channel.sendToQueue(queue, Buffer.from(message));
        console.log(' [X] Send %s', message);
    });

    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, 500);
});