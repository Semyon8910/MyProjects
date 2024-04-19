import { useParams } from "react-router-dom";
import "./SearchPage.css";
import { useState } from "react";

function SearchPage(): JSX.Element {

    const URL_CAR="";
    const URL_BIKE="";
    const URL_TRUCK="";
    const URL_OFFROAD="";

    const params = useParams();

    const vType = params.vechileType?.toLowerCase() || "";
    const [myVtype, setVtype] = useState("");

    const getData = ()=>{
        switch(vType){
            case "car":

            break;
            case "bike":

            break;
            case "truck":

            break;
            case "offroad":

            break;
        }
    }

    return (
        <div className="SearchPage">
			{vType} locator<br/><hr/>
            <div className="Box">
                <input type="text" onChange={handleTextCange}/>
                <input type="button" value={"search"}/>
            </div>
        </div>
    );
}

export default SearchPage;
