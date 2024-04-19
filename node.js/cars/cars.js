let url = require('url');
let fs = require('fs');
let axios = require('axios')

let endPoint = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q="

const getData = (carNumber) => {
    return new Promise ((resolve, reject) => {
        axios.get(endPoint+carNumber).then((data) => {
            resolve(data);  
            console.log(data);          
        }).catch((err) => {
            reject(err);
        });
    });
}

let data = []