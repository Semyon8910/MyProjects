import "./gabriel.css";
import { SyntheticEvent,useState } from "react";

function Gabriel(): JSX.Element {
    let [myName,setName] = useState("");
    let [displayName, setDisplay] = useState(false);
    const updateName = (e:SyntheticEvent) => {
        let checkName = ((e.target as HTMLInputElement).value)
        setName(checkName.toLowerCase().replace("gabriel","azriel"));
    }
    const sendName = (e:SyntheticEvent) => {
        setDisplay(true);
    }
    return (
        <div className="Box">
			<input type="text" placeholder="enter name" onInput={updateName}/><br/><br/>
            <input type="button" value="send" onClick={sendName}/><br/>
            {displayName && myName}
        </div>
    );
}

export default Gabriel;
