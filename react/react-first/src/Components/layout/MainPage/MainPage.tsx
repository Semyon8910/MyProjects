import Switcher from "../../modules/Switcher/Switcher";
import "./MainPage.css";

function MainPage(): JSX.Element {
    let x:number=1;
    let y:number=3;
    let switchers = [
        {id:1, nodeId:10, name:"enterance", location:"main floor"},
        {id:2, nodeId:11, name:"dining room", location:"main floor"}
    ]
    return (
        <div className="MainPage">
			we have {x} devices, and total {y} <br/><br/>
            {switchers.map(item=>
            <Switcher key={item.id} nodeId={item.nodeId} name={item.name} location={item.location} />   
            )}
        </div>
    );
}

export default MainPage;
