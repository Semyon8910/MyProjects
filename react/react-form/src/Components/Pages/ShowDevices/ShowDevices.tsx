import { Devices } from "../../Model/Devices";
import { Epid } from "../../Model/epid";
import { Home } from "../../Model/Home";
import ShowEPID from "../ShowEPID/ShowEPID";
import "./ShowDevices.css";

function ShowDevices(): JSX.Element {

    let myHome = new Home(
        1,
        "sweetHome",
        [
            new Devices(
                1, "sallon","gp31",10,[
                    new Epid(1,"main light"),
                    new Epid(2,"Spot light"),
                    new Epid(3, "led strip")
                ]
            ),
            new Devices(
                2, "kitchen", "gp21",11,[
                    new Epid(1,"main kitchen light"),
                    new Epid(2,"Bucher light")
                ]
            )
        ]
    );
    return (
        <div className="ShowDevices">
            <h1>{myHome.name}</h1>
            {myHome.devices.map((item,index)=>
            <div className="Box">
            
            node id: {item.id}<br/>
            <div className="nodes">
                node location: <input type="text" value={item.location as string}/><br/>
                node name : <input type="text" value={item.name as string}/><br/>
            </div>
            <ShowEPID  key={index} endDevices={item.epid} /><br/>
            </div>
            )}
        </div>
    );
}

export default ShowDevices;
