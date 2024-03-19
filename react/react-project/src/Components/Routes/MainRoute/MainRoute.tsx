import { Route, Routes } from "react-router-dom";
import Main from "../../pages/main/main";
import Assets from "../../pages/Assets/Assets";
import AssetsByID from "../../pages/AssetsByID/AssetsByID";
import Exchanges from "../../pages/Exchanges/Exchanges";
import ExchangesByID from "../../pages/ExchangesByID/ExchangesByID";
import IdHistory from "../../pages/IdHistory/IdHistory";
import IdMarkets from "../../pages/IdMarkets/IdMarkets";
import Markets from "../../pages/Markets/Markets";
import Rates from "../../pages/Rates/Rates";
import RatesByID from "../../pages/RatesByID/RatesByID";
import Page404 from "../../pages/Page404/Page404";
import Login from "../../layout/login/login";
import Signin from "../../pages/signin/signin";

function MainRoute(): JSX.Element {
    return (
        <div className="MainRoute">
        <Routes>
			<Route path="/" element={<Login/>}/>
            <Route path="/assets" element={<Assets/>}/>
            <Route path="/assetsByID" element={<AssetsByID/>}/>
            <Route path="/exchanges" element={<Exchanges/>}/>
            <Route path="/exchangesByID" element={<ExchangesByID/>}/>
            <Route path="/IdHistory" element={<IdHistory/>}/>
            <Route path="/IdMarkets" element={<IdMarkets/>}/>
            <Route path="/Markets" element={<Markets/>}/>
            <Route path="/Rates" element={<Rates/>}/>
            <Route path="/RatesByID" element={<RatesByID/>}/>
            <Route path="/*" element={<Page404/>}/>
            <Route path="/signin" element={<Signin/>}/>
        </Routes>
        </div>
    );
}

export default MainRoute;
