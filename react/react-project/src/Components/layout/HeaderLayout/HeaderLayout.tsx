import { NavLink } from "react-router-dom";
import "./HeaderLayout.css";

function HeaderLayout(): JSX.Element {
    return (
        <div className="HeaderLayout">
			<NavLink to="/"><h1>Coins</h1></NavLink>
        </div>
    );
}

export default HeaderLayout;
