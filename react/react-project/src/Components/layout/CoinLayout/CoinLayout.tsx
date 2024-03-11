import { useState, useEffect } from "react";
import "./CoinLayout.css";
import { CoinRate } from "../../Model/CoinRate";
import axios from "axios";
import SingleCoin from "../../item/SingleCoin/SingleCoin";

function CoinLayout(): JSX.Element {
    const [coins,setCoin] = useState<CoinRate[]>([]);
    const COIN_RATE_URL = "https://api.coincap.io/v2/rates";

    // const getCoinRateData = async () => {
    //     const result = await axios(COIN_RATE_URL);
    //     console.log(result);
    // }

    useEffect(() => {
        axios.get(COIN_RATE_URL).then((result) => {
          console.log(result.data.data);
          setCoin(result.data.data);
        });
      }, []);

    return (
        <div className="CoinLayout">
			    {
                coins.map((item,index)=><SingleCoin key={index} id={item.id} symbol={item.symbol} currencySymbol={item.currencySymbol} rateUsd={item.rateUsd} type={item.type}/>)
        }
        </div>
    );
}

export default CoinLayout;
