import React, {useState} from 'react';
import './App.scss'
import {HeaderHoc} from './components/Header/HeaderHOC'
import {Portfolio} from "./components/Portfolio/Portfolio";
// import Tilt from 'react-tilt'
// import Fade from 'react-reveal/Fade'; import {Header} from "./components/Header";
// import {Link, animateScroll as scroll} from "react-scroll"

export const App = () => {


    let [state, setState] = useState(false)
    return (
        <>
            <div className={state ? "menu-wrapper" : "menu-wrapper open"}>
                <button onClick={() => {
                    setState(!state)
                }} className={state ? "hamburger-menu" : "hamburger-menu open"}>
                    <span className='hamburger'></span>
                    <span className='hamburger-overlay'></span>
                </button>
                <div className="Menu ham-tilt">
                    <ul className="Menu-list">
                        <li className="Menu-list-item">
                            <a href="#home">Home
                                <span className="Mask"><span>Home</span></span>
                                <span className="Mask"><span>Home</span></span>
                            </a>
                        </li>
                        <li className="Menu-list-item">
                            <a href="#portfolio">Work
                                <span className="Mask"><span>Work</span></span>
                                <span className="Mask"><span>Work</span></span>
                            </a>
                        </li>
                        <li className="Menu-list-item">
                            <a href="#services">Services
                                <span className="Mask"><span>Services</span></span>
                                <span className="Mask"><span>Services</span></span>
                            </a>
                        </li>
                        <li className="Menu-list-item">
                            <a href="#blog">Blog
                                <span className="Mask"><span>Blog</span></span>
                                <span className="Mask"><span>Blog</span></span>
                            </a>
                        </li>
                        <li className="Menu-list-item">
                            <a href="#contact">Contact
                                <span className="Mask"><span>Contact</span></span>
                                <span className="Mask"><span>Contact</span></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <HeaderHoc/>

            <Portfolio/>


        </>
    )
}

export default App;
