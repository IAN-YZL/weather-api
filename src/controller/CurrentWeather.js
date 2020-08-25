const axios = require('axios');
const apiKey = process.env.API_KEY;
const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
});

function getData() {
    const weather = instance.get('/weather', {
        params: {
            q: "Paris",
            units: 'metric',
            APPID: apiKey,
        }
    });
    return weather;

}

module.exports = getData;