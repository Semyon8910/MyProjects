import axios from "axios";

const SHAMAI_URL = "https://data.gov.il/api/3/action/datastore_search?resource_id=4a434d65-3ca2-45e5-8026-5d9819c3f95c&q=";

const shamaiInfo = async (id:string) => {
    let myData = (await axios.get(SHAMAI_URL+id)).data.result.records[0];
    return myData;
}

export {shamaiInfo}

shamaiInfo("100").then(res=> console.log(res));