import React from "react";
import {MenuList} from "./MenuList";
import {Link} from "react-scroll"

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
                        <Link to="header"
                              spy={true}
                              smooth={true}
                              offset={-50}
                              duration={500}
                        > <MenuList onClick={props.onClick} name={'Home'}/></Link>
                        <Link to="work"
                              spy={true}
                              smooth={true}
                              offset={-50}
                              duration={500}
                        > <MenuList onClick={props.onClick} name={'Work'}/></Link>
                        <Link to="skills"
                              spy={true}
                              smooth={true}
                              offset={-50}
                              duration={500}
                        > <MenuList onClick={props.onClick} name={'Skills'}/></Link>
                        <Link to="contact"
                              spy={true}
                              smooth={true}
                              offset={-50}
                              duration={500}
                        > <MenuList onClick={props.onClick} name={'Contact'}/></Link>
                    </ul>
                </nav>
            </div>
        </div>
    </>
})