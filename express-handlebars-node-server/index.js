const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const port = 8082;

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (request, response) => {
   response.render('home', {
       name: 'World'
   });
});

app.get('/parameters/:param', (req, res) => {
    res.render('pathParam', {
        param: req.params.param
    });
});

app.get('/parameters', (req, res) => {
   res.render('queryParam', {
       param: req.query.param
   });
});

app.listen(port, (err) => {
    if(err){
        console.log('Error starting application', err);
    }
    console.log(`Started app on '${port}'`);
});
