import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<h3>main menu</h3>
            <hr/>
            <NavLink to={"/search/Car"}>Car Locator</NavLink> <br/>
            <NavLink to={"/search/Motorbike"}> Motorbike locator </NavLink> <br/>
            <NavLink to={"/search/Truck"}>Truck locator</NavLink><br/>
            <NavLink to={"/search/offroad"}>out of road</NavLink>
        </div>
    );
}

export default Menu;
