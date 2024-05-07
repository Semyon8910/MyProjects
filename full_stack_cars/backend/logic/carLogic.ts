import axios from 'axios';
import CarData from '../Models/carData';
import { addToStorage, searchCarsByPrice, updateCarSold } from '../Utils/storage';

const CAR_URL = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";

const addCar = async (carNumber: string, price:number,hand:number,km:number) => {
    let myData = (await axios.get(CAR_URL+carNumber)).data.result.records[0];
    
    //create new object (as we wrote in the model)
    let carInfo = new CarData(
        carNumber,
        myData["tozeret_nm"],
        myData["tokef_dt"],
        myData["tzeva_rechev"],
        myData["sug_delek_nm"],
        myData["kinuy_mishari"],
        price,
        hand,
        km,
        myData["shnat_yitzur"]
    );
    addToStorage(carInfo);
}
const soldCar = (carNumber: string) => {
    updateCarSold(carNumber);
}
const searchByManufacturer = (manufacturer: string) =>{}
const searchByPrice = (lowPrice: number, highPrice: number) =>{
    searchCarsByPrice(lowPrice, highPrice);
}
const searchByModel = (model: string) => {}
const soldList = () => {}

// addCar("4424213", 10000, 3, 210000);
// soldCar("4424213");
console.log(searchByPrice(5000, 50000));

export {
    addCar,
    soldCar,
    searchByPrice
}

