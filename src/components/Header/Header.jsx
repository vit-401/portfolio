import React from "react";
import Particles from "react-particles-js";
import ReactTypingEffect from "react-typing-effect";
import photo from "../../common/photo/IMG_9397-2.jpg";

export function Header(props) {
    return <header className={"header"}>
        <Particles className={"particles"} params={props.params}/>
        <Particles className={"particles"} params={props.params1}/>
        <div className="container">
            <nav className="menu">
                <div className="menu__btn">
                    <div/>
                    <div/>
                    <div/>
                </div>
                <ul className={"menu__list"}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="header__inner">
                <div className="header__item">
                    <div className="header__discription">
                        <span>Hi There</span>
                        <h2>I am<span className={"name"}>Vitally Prysyazhnyuk</span></h2>
                        <h3><ReactTypingEffect text={"Frontend Developer"}
                                               speed={250}
                                               typingDelay={1000} cursor='_'/>
                        </h3>
                    </div>
                </div>
                <div className="header__item">
                    <div className="header__photo parallaxed">
                        <img src={photo} alt=""/>
                        <div className={"border parallaxed2"}/>
                    </div>
                </div>
            </div>
        </div>
    </header>;
}