const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
});

// Get data from openweather API
instance.get('/weather', {
    params: {
        q: "Paris",
        units: 'metric',
        APPID: ""
    }
}).then(res => {
    const {main, wind} = res.data;
    console.log({main, wind});
});
