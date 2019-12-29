const cors = require('cors');
const express = require('express');
let app = express();
const port = 3005
const request = require('request');
const config = require('./config')

app.use(cors());
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/getWeather', (req, res) => {
    const city = req.query.city;
    const url = config.url;
    const appId = config.appId
    const endPoint = `${url}${city}&appid=${appId}&units=metric`;
    request(endPoint, (err, response, body) => {
        const result = JSON.parse(body);
        if (result.cod === "404" || err) { 
            res.status(404);
            res.send('No Data found for ' + city); 
        } else {
            res.send(result);
        }
    });
});