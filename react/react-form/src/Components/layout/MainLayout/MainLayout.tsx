import ShowDevices from "../../Pages/ShowDevices/ShowDevices";
import FooterLayout from "../FooterLayout/FooterLayout";
import HeaderLayout from "../HeaderLayout/HeaderLayout";
import MainMenu from "../MainMenu/MainMenu";
import MainPage from "../MainPage/MainPage";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header>
                <HeaderLayout/>
            </header>
            <aside>
                <MainMenu/>
            </aside>
            <main>
                <ShowDevices/>
            </main>
            <footer>
                <FooterLayout/>
            </footer>
        </div>
    );
}

export default MainLayout;
