const url="https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q="
const urlN="https://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&q="
const carNumber="50096"
const getCarData = new Promise((resolve, reject) => {
    try {
        let carData=fetch(url+carNumber);
        resolve(carData);
    } catch (err) {
        reject (err);
    }
});

const getDisCarData = new Promise((resolve, reject) => {
    try {
        let disCar = fetch(urlN+carNumber);
        resolve(disCar);
    } catch (err) {
        reject (err);
    }
});

const getData = async () => {
    let carData = await getCarData;
    console.log((await carData.json()).result.records[0]);
}

const disCarData = async () => {
    let carData = await getDisCarData;
    console.log(await carData.json());
}

getData();
disCarData();