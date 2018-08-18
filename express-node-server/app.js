const express = require('express');
const app = express();
const port = 8081;

app.get('/hello', (request, response) => {
   response.send('Hello Express!');
});

app.use((request, response, next) => {
    console.log('Headers: ', request.headers);
    next();
});

app.use((request, response, next) => {
   request.chance = Math.random();
   console.log('Chance', request.chance);
   next();
});

app.get('/', (request, response) => {
   response.json({
      chance: request.chance
   });
});

app.get('/error', (request, response) => {
    throw new Error('error test');
});

app.use((err, request, response, next) => {
    console.log('Error: ', err);
    response.status(500).send('Error on application :(');
});

app.listen(port, (err) => {
   if(err){
       return console.log('Failed to start server', err);
   }
   console.log(`Start express server on ${port}`);
});