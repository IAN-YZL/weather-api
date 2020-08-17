const express = require('express');

const app = express();
const massage = [];

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/hello', (req, res) => {
    res.send('Hello from get');
});

app.listen(3000, () => {

    console.log('server listening on port 3000');
});
  

