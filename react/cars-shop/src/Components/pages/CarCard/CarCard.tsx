import { Car } from "../../Model/Car";
import "./CarCard.css";

interface CarCardProps {
    item: Car;
}

function CarCard(props: CarCardProps): JSX.Element {
    return (
        <div className="CarCard">
			{props.item.carNumber}<hr/>
            {props.item.kinuy_mishari}<hr/>
            {props.item.baalut}<hr/>
            {props.item.moed_aliya_lakvish}<hr/>
            {props.item.sug_delek_nm}<hr/>
            {props.item.tokef_dt}
        </div>
    );
}

export default CarCard;
