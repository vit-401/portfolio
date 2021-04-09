import React from 'react';
import './App.scss'
import {HeaderHoc} from './components/Header/HeaderHOC'
import {PortfolioHOC} from "./components/Portfolio/PortfolioHOC";
import {HamburgerHOC} from "./components/Hamburger/HamburgerHOC";
// import Tilt from 'react-tilt'
// import Fade from 'react-reveal/Fade'; import {Header} from "./components/Header";
// import {Link, animateScroll as scroll} from "react-scroll"

export const App = React.memo(() => {


    return (
        <>
            <HamburgerHOC/>
            <HeaderHoc/>

            <PortfolioHOC/>


        </>
    )
})

export default App;
