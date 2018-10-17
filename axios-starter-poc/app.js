const axios = require('axios');

const baseUrl = 'https://swapi.co/api/';

axios.get(baseUrl + 'people/1')
    .then((response) => {
        // handle success
        console.log(response.data);
    })
    .catch((error) => {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
        console.log('Done!')
    });