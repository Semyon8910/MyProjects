import { NavLink } from "react-router-dom";
import "./MenuLayout.css";

function MenuLayout(): JSX.Element {
    return (
        <div className="MenuLayout">
			<h3>Menu</h3>
            <NavLink to="/">Cars List</NavLink><br/><br/>
            <NavLink to="/addCar">Add car</NavLink><br/><br/>
            <NavLink to="/removeCar">Remove car</NavLink>
        </div>
    );
}

export default MenuLayout;
