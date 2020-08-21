const axios = require('axios');
const instance = axios.create({
    baseURL: 'api.openweathermap.org/data/2.5',
});

instance.get('/weather', {
    params: {
        q: "Paris",
        units: 'metric',
        APPID: "a188b2650dceb0044e221c9ed68ae9b2"
    }
}).then(res => {
    console.log(res);
});
