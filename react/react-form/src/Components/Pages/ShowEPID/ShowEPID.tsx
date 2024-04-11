import "./ShowEPID.css";
import { Epid } from "../../Model/epid";

interface epidProps{
    endDevices:Epid[];
}

function ShowEPID(props:epidProps): JSX.Element {
    return (
        <div className="ShowEPID internalBox">
			{props.endDevices.map((item, index) => 
                <>
                    <span key={item.id}>epid: {item.id}</span><br/>
                    <span key={index}><input type="text" value={item.name as string} /></span><hr/>
                </>
            )}
        </div>
    );
}

export default ShowEPID;
