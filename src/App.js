import React, {useCallback, useEffect} from 'react';
import './App.scss'
import photo from './common/photo/IMG_9397-2.jpg'
import ReactTypingEffect from 'react-typing-effect';
// import Tilt from 'react-tilt'
// import Fade from 'react-reveal/Fade';
import Particles from "react-particles-js";
// import {Link, animateScroll as scroll} from "react-scroll"

export const App = () => {

    const handler = useCallback(e => {
        let amountMovedX = (e.clientX * -0.3 / 8);
        let amountMovedY = (e.clientY * -0.3 / 8);
        let x = document.getElementsByClassName("parallaxed");
        let x2 = document.getElementsByClassName("parallaxed2");
        let i;
        for (i = 0; i < x.length; i++) {
            x[i].style.transform = 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0px)'
            x2[i].style.transform = 'translate3d(' + amountMovedX * 2 + 'px,' + amountMovedY + 'px, 0px)'
        }
    }, [])

    useEffect(() => {
        document.body.addEventListener('mousemove', handler);
        return () => document.body.addEventListener('mousemove', handler);
    }, [handler])

    let ParticleParamsDots ={
        particles: {
            size: {
                value: 1
            },
            line_linked: {
                enable: false,
            },
            "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
            }
        }
    }

    let ParticleParamsLines ={
        particles: {
            size: {
                value: 2
            },
            line_linked: {
                enable: true,
            },
            "move": {
                "random": true,
                "speed": 2,
            }
        }
    }


    return (
        <>
            <header className={'header'}>
                <Particles className={'particles'} params={ParticleParamsLines}/>
                <Particles className={'particles'} params={ParticleParamsDots}/>
                <div className="container">
                    <nav className="menu">
                        <div className="menu__btn">
                            <div/>
                            <div/>
                            <div/>
                        </div>
                        <ul className={'menu__list'}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="header__inner">
                        <div className="header__item">
                            <div className="header__discription">
                                <span>Hi There</span>
                                <h2>I am<span className={'name'}>Vitally Prysyazhnyuk</span></h2>
                                <h3><ReactTypingEffect text={'Frontend Developer'}
                                                       speed={250}
                                                       typingDelay={1000} cursor='_'/>
                                </h3>
                            </div>
                        </div>
                        <div className="header__item">
                            <div className="header__photo parallaxed">
                                <img src={photo} alt=""/>
                                <div className={'border parallaxed2'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}

export default App;
