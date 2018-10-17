const axios = require('axios');

const baseUrl = 'https://swapi.co/api/';

axios.get(baseUrl + 'people/1')
    .then((response) => {
        // handle success
        console.log('People');
        console.log(response.data);
    })
    .catch((error) => {
        // handle error
        console.log('Error', error);
    })
    .then(function () {
        // always executed
        console.log('Done!')
    });

axios({
    method:'get',
    url: baseUrl + 'planets/1',
}).then((response) => {
        console.log('Planet');
        console.log(response.data);
    }).catch((error) => {
        console.log('Error: ', error)
    });