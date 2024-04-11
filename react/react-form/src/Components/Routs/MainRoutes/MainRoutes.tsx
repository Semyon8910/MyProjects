import { Route, Routes } from "react-router-dom";
import "./MainRoutes.css";
import MainPage from "../../layout/MainPage/MainPage";

function MainRoutes(): JSX.Element {
    return (
        <div className="MainRoutes">
			<Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </div>
    );
}

export default MainRoutes;
