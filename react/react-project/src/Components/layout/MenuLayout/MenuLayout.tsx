import { NavLink } from "react-router-dom";
import "./MenuLayout.css";

function MenuLayout(): JSX.Element {
    return (
        <div className="MenuLayout">
<<<<<<< HEAD
			Assets<hr/>
            Rates<hr/>
            Exchanges<hr/>
            Markets<hr/>
=======
            <h1>Menu</h1><hr/>
			<b>Assets</b><hr/>
            <NavLink to="/assets">Assets</NavLink><br/>
            <NavLink to="/assetsByID">Assets by ID</NavLink><br/>
            <NavLink to="/IdHistory">ID history</NavLink><br/>
            <NavLink to="/IdMarkets">ID markets</NavLink><br/><br/>
            <b>Rates</b><hr/>
            <NavLink to="/Rates">Rates</NavLink><br/>
            <NavLink to="/RatesByID">Rates by ID</NavLink><br/><br/>
            <b>Exchanges</b><hr/>
            <NavLink to="/Exchanges">Exchanges</NavLink><br/>
            <NavLink to="/ExchangesByID">Exchanges by ID</NavLink><br/><br/>
            <b>Markets</b><hr/>
            <NavLink to="/Markets">Markets</NavLink>
>>>>>>> 25e5e8b1e291b07861b125ecbc54482adeeb456a
        </div>
    );
}

export default MenuLayout;
