import React from "react";

export const MenuList = React.memo((props) => {
    return <li onClick={props.onClick} className="Menu-list-item">
        <a href="#home">{props.name}
            <span className="Mask"><span>{props.name}</span></span>
            <span className="Mask"><span>{props.name}</span></span>
        </a>
    </li>
})