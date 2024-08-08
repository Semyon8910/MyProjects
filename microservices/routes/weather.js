const express = require('express');
const http = require('http');

const weatherRouter = express.Router();

weatherRouter.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

weatherRouter.post("/", (req, res)=>{
    const city = req.body.cityName;
    const apiKey = "810eddba11c34462a47160456240608";

    const URL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}%20&q=${city}&aqi=no`;
    http.get(URL, (response)=>{
        response.on("data", (nyData)=>{
            const responseData = JSON.parse(nyData);
            const temperature = responseData.current.temp_c;
            const weatherDes = responseData.current.condition.text;
            const icon = "https:"+responseData.current.condition.icon;
            res.write(`<h1>the weather is ${temperature} degree celsiuis in ${city} and it's ${weatherDes}</h1>`);
            res.write(`<img src="${icon}"/>`);
            res.send();
        })
    });
})

module.exports = weatherRouter;