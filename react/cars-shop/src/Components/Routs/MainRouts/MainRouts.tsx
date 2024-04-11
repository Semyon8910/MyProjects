import { Route, Routes } from "react-router-dom";
import "./MainRouts.css";
import MainPage from "../../pages/MainPage/MainPage";
import AddCar from "../../pages/AddCar/AddCar";
import RemoveCar from "../../pages/RemoveCar/RemoveCar";
import Page404 from "../../pages/Page404/Page404";

function MainRouts(): JSX.Element {
    return (
        <div className="MainRouts">
			<Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/addCar" element={<AddCar/>}/>
                <Route path="/removeCar" element={<RemoveCar/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default MainRouts;
