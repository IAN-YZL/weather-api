const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
});

// Get data from openweather API
Promise.all([instance.get('/weather', {
    params: {
        q: "Paris",
        units: 'metric',
        APPID: ""
    }
}).then(res => {
    const {main, wind} = res.data;
    return ({main, wind});
}),
instance.get('./forecast',{
    params: {
        q: "Paris",
        units: "metric",
        APPID: ""
    }
})
.then(res => {
    const {city} = res.data;
    return ({city});
})]).then(res => {
    console.log(res);
})
