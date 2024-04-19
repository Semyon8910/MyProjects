let express = require('express');
let app = express();
let axios = require('axios');
const { resolve } = require('path');
const { rejects } = require('assert');
let endPoint = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";

const getCar = (carNumber) => {
    return new Promise((resolve, reject) => {
        axios.get(endPoint+carNumber).then((res)=>{
        resolve(res.data.result.records);
    }).catch((err)=>{
        reject(err);
    }
    )
}
)}

app.get('')
