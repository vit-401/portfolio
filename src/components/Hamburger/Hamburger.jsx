import React from "react";
import {MenuList} from "./MenuList";

export const Hamburger = React.memo((props) => {
    return <>
        <div className={props.state ? "menu-wrapper" : "menu-wrapper open"}>
            <button onClick={props.onClick} className={props.state ? "hamburger-menu" : "hamburger-menu open"}>
                <span className='hamburger'/>
                <span className='hamburger-overlay'/>
            </button>
            <div className="Menu ham-tilt">
                <nav>
                    <ul className="Menu-list">
                        <MenuList name={'Home'}/>
                        <MenuList name={'Work'}/>
                        <MenuList name={'Services'}/>
                        <MenuList name={'Blog'}/>
                        <MenuList name={'Contact'}/>
                    </ul>
                </nav>
            </div>
        </div>
    </>
})