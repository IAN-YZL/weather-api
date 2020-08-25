
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const axios = require('axios');
let dotenv = require('dotenv');
dotenv.config('./env');
const apiKey = process.env.API_KEY;
const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
});
const getData = require("./src/controller/CurrentWeather");





// Get data from openweather API
// function getData() {
//     const weather = instance.get('/weather', {
//         params: {
//             q: "Paris",
//             units: 'metric',
//             APPID: apiKey,
//         }
//     });
//     return weather;
// }

// const data = getData;

function getWeather(req, res, next) {
    getData().then(response => {
        res.json(response.data.main);
    })
}
    
// Promise.all([instance.get('/weather', {
//     params: {
//         q: "Paris",
//         units: 'metric',
//         APPID: apiKey,
//     }
// }).then(res => {
//     const {main, wind} = res.data;
//     return ({main, wind});
// }),
// instance.get('./forecast',{
//     params: {
//         q: "Paris",
//         units: "metric",
//         APPID: apiKey,
//     }
// })
// .then(res => {
//     const {city} = res.data;
//     return ({city});
// })]);
// }

// function resolveWeather() {
// getWeather.then((res) => {
//     const weather = res[0];
//     const city = res[1];
//     const temp = weather.temp;
//     console.log(temp) ;
// })


app.use(express.json());
app.use("/weather", getWeather);

app.listen(PORT, ()=> {
    console.log(`server listening on port ${PORT}`);
})