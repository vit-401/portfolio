import React, {useState} from "react";
import {Hamburger} from "./Hamburger";

export function HamburgerHOC() {

    let [state, setState] = useState(true)
const handler = () => {
    setState(!state)
}
    return <Hamburger state={state} onClick={handler}/>
}