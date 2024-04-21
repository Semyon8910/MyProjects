let express = require('express');
let app = express();
let axios = require('axios');
const { resolve } = require('path');
const { rejects } = require('assert');
const carEndPoint = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
const bikeEndPoint = "https://data.gov.il/api/3/action/datastore_search?resource_id=bf9df4e2-d90d-4c0a-a400-19e15af8e95f&q="; 
const recallEndPoint = "https://data.gov.il/api/3/action/datastore_search?resource_id=36bf1404-0be4-49d2-82dc-2f1ead4a8b93&q=";
const outOfRoadEndPoint = "https://data.gov.il/api/3/action/datastore_search?resource_id=851ecab1-0622-4dbe-a6c7-f950cf82abf9&q=";
const truckEndPoint = "https://data.gov.il/api/3/action/datastore_search?resource_id=cd3acc5c-03c3-4c89-9c54-d40f93c0d790&q=";
const disabledEndPoint = "https://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&q=";
let url = "localhost";
let port = 3000;

const getCar = (carNumber) => {
    return new Promise((resolve, reject) => {
        axios.get(carEndPoint+carNumber).then((res)=>{
        resolve(res.data.result.records);
    }).catch((err)=>{
        reject(err);
    }
    )
}
)}

const getMotorcycle = (carNumber) => {
    return new Promise((resolve, reject) => {
        axios.get(bikeEndPoint+carNumber).then((res)=>{
        resolve(res.data.result.records);
    }).catch((err)=>{
        reject(err);
    }
    )
}
)}

const getRecall = (carNumber) => {
    return new Promise((resolve, reject) => {
        axios.get(recallEndPoint+carNumber).then((res)=>{
        resolve(res.data.result.records);
    }).catch((err)=>{
        reject(err);
    }
    )
}
)}

const getOutOfRoad = (carNumber) => {
    return new Promise((resolve, reject) => {
        axios.get(outOfRoadEndPoint+carNumber).then((res)=>{
        resolve(res.data.result.records);
    }).catch((err)=>{
        reject(err);
    }
    )
}
)}

const getTruck = (carNumber) => {
    return new Promise((resolve, reject) => {
        axios.get(truckEndPoint+carNumber).then((res)=>{
        resolve(res.data.result.records);
    }).catch((err)=>{
        reject(err);
    }
    )
}
)}

const getDisabled = (carNumber) => {
    return new Promise((resolve, reject) => {
        axios.get(disabledEndPoint+carNumber).then((res)=>{
        resolve(res.data.result.records);
    }).catch((err)=>{
        reject(err);
    }
    )
}
)}


// async function test () {
// const carData = await getMotorcycle(52937703);
// console.log(carData);
// }

// test();
// 52937703 motorcycle
// 2236638 privat with recall
// 6544126 out of road

app.get('/:carNumber', async (req, res) => {
    try {
        let carData = await getCar(req.params.carNumber);
        let recall = await getRecall(req.params.carNumber);
        let disabledParking = await getDisabled(req.params.carNumber);
        let data = {};
        
        if (carData.length>0) {
            data = {private: carData};
            if (recall.length>0) {
                data.recall = recall;
            }
            if (disabledParking.length>0) {
                data.disabledParking = disabledParking;
            }    
        } else {
            carData = await getMotorcycle(req.params.carNumber);
            if (carData.length>0) {
                data = {motorcycle: carData};
                if (recall.length>0) {
                    data.recall = recall;
                }
                if (disabledParking.length>0) {
                    data.disabledParking = disabledParking;
                }        
            } else {
                carData = await getOutOfRoad(req.params.carNumber);
                if (carData.length>0) { 
                    data = {outOfRoad: carData};
                } else {
                    carData = await getTruck(req.params.carNumber);
                    if (carData.length>0) {
                        data = {truck: carData};
                        if (recall.length>0){
                            data.recall = recall;
                        }
                        if (disabledParking.length>0) {
                            data.disabledParking = disabledParking;
                        }    
                    }
                }
            } 
        }
        res.send(data);
    } catch (err) {
        res.send(err);
    }
});

app.listen(port, url, ()=>{
    console.log(`http://${url}:${port}`);
}); 