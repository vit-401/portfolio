import React from 'react';
import './App.scss'
import {HeaderHoc} from './components/Header/HeaderHOC'
import {Portfolio} from "./components/Portfolio/Portfolio";
import {HamburgerHOC} from "./components/Hamburger/HamburgerHOC";
// import Tilt from 'react-tilt'
// import Fade from 'react-reveal/Fade'; import {Header} from "./components/Header";
// import {Link, animateScroll as scroll} from "react-scroll"

export const App = () => {


    return (
        <>
            <HamburgerHOC/>
            <HeaderHoc/>

            <Portfolio/>


        </>
    )
}

export default App;
