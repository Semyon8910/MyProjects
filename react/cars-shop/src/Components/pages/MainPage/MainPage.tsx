import { useEffect, useState } from "react";
import { Car } from "../../Model/Car";
import "./MainPage.css";
import { useParams } from "react-router-dom";
import { store } from "../../redux/store";
import { addCar } from "../../redux/carsReduser";
import CarCard from "../CarCard/CarCard";

function MainPage(): JSX.Element {
    // const [carList, setCarList] = useState<Car[]>([]);
    // const params = useParams();
    useEffect(()=> {
        if (store.getState().cars.allCars.length < 1) {
            try {
                let carList = JSON.parse(localStorage.getItem("carList") || "[]");
                console.log("from the local storage");
                if (carList.length > 0) {
                    store.dispatch(addCar(carList));
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    );
    return (
        <div className="MainPage">
			{store.getState().cars.allCars.map((item, index)=> {
                return <CarCard key={index} item={item} />
            })}
        </div>
    );
}

export default MainPage;
