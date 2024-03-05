import "./Switcher.css";

interface SwitcherProps {
    nodeId:number;
    name:String;
    location:String;	
}

function Switcher(props: SwitcherProps): JSX.Element {
    return (
        <div className="Switcher Box">
			nodeId:{props.nodeId}<br/>name:{props.name}<br/>location:{props.location}<br/>
            <input type="text"/>
            <input type="submit"/>
        </div>
    );
}

export default Switcher;
