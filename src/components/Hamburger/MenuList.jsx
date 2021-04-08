import React from "react";

export function MenuList(props) {
    return <li className="Menu-list-item">
        <a href="#home">{props.name}
            <span className="Mask"><span>{props.name}</span></span>
            <span className="Mask"><span>{props.name}</span></span>
        </a>
    </li>
}