import { useState } from "react";
import "./AddCar.css";
import axios from "axios";
import { Car } from "../../Model/Car";

function AddCar(): JSX.Element {
    const API_ENDPOINT = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
    const [carNumber, setCarNumber] = useState("");
    const [carInfo, setCarInfo] = useState<Car | null>(null);
    const [numberOfOwners, setNumberOfOwners] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);

    const handleSearch = () => {
        axios.get(API_ENDPOINT + carNumber).then((res) => {
            let carData = res.data.result.records[0];

            const car = new Car (carData.carNumber, carData.kinuy_mishari, carData.baalut, carData.moed_aliya_lakvish, carData.sug_delek_nm, carData.tokef_dt);
            setCarInfo(car);
            console.log(carData);
        });
    }

    const handleAddCar = () => {
        let carlist = JSON.parse(localStorage.getItem("carList") || "[]");
        carlist.push(carInfo);
        localStorage.setItem("carList", JSON.stringify(carlist));
    }
    return (
        <div className="AddCar">
            <div className="Box">
			    <input type="text" placeholder="enter car number" onChange={(args=>setCarNumber(args.currentTarget.value))}/>
                <input type="button" value="search" onClick={handleSearch}/><br/><br/>
                <input type="text" placeholder="model name" value={carInfo?.kinuy_mishari as string || ''} disabled/><br/><br/>
                <input type="text" placeholder="owner type" value={carInfo?.baalut as string || ''} disabled/><br/><br/>
                <input type="text" placeholder="on the road from..." value={carInfo?.moed_aliya_lakvish as string || ''} disabled/><br/><br/>
                <input type="text" placeholder="fuel type" value={carInfo?.sug_delek_nm as string || ''} disabled/><br/><br/>
                <input type="text" placeholder="next test" value={carInfo?.tokef_dt as string || ''} disabled/><br/><br/>
                <input type="text" placeholder="enter number of owners" onChange={(args=>setNumberOfOwners(args.currentTarget.value))}/><br/><br/>
                <input type="text" placeholder="enter description" onChange={(args=>setDescription(args.currentTarget.value))}/><br/><br/>
                <input type="URL" placeholder="enter image1 url"/><br/><br/>
                <input type="URL" placeholder="enter image2 url"/><br/><br/>
                <input type="URL" placeholder="enter image3 url"/><br/><br/>
                <input type="button" onClick={handleAddCar} value="Add car"/>
            </div>
        </div>
    );
}

export default AddCar;
