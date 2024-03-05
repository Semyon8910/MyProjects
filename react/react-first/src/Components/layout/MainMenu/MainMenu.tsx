import "./MainMenu.css";

function MainMenu(): JSX.Element {
    let menu = [
        {id:1, name:"add switcher"},
        {id:2, name:"add double switcher"},
        {id:3, name:"add 3 exit switcher"},
        {id:4, name:"add 9 exit switcher"},
        {id:5, name:"add control board"},
        {id:6, name:"add sensor"},
        {id:7, name:"add tris"},
        {id:8, name:"send to server"}
    ]
    return (
        <div className="MainMenu">
			<h2>Main Menu</h2><hr/>
            {menu.map(item=>
            <>
            <span key={item.id}>{item.name}<br/></span>
            {item.id==7 && <hr/>}
            </>
            )}
        </div>
    );
}

export default MainMenu;
