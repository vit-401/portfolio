import React from "react";
import Particles from "react-particles-js";
import ReactTypingEffect from "react-typing-effect";
import photo from "../../common/photo/IMG_9397-2.jpg";
import {Fade} from "react-reveal";
import {Element} from "react-scroll";

export const Header = React.memo((props) => {
    return <header id={"header"}   className={"header"}>
        <Particles className={"particles"} params={props.params}/>
        <Particles className={"particles"} params={props.params1}/>
        <div className="container">
            <div className="header__inner">
                <div className="header__item">
                    <div className="header__discription">
                        <Fade bottom>
                            <span>Hi There</span>
                        </Fade>
                        <Fade bottom>
                            <h2>I am<span className={"name"}>Vitally Prysyazhnyuk</span></h2>
                        </Fade>
                        <h3><ReactTypingEffect text={"Frontend Developer"}
                                               speed={80}
                                               typingDelay={1000} cursor='_'/>
                        </h3>
                    </div>
                </div>
                <div className="header__item">
                    <Fade bottom>
                        <div className="header__photo">
                            <img src={photo} alt="" className={"parallaxed"}/>
                            <div className={"border parallaxed2"}/>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    </header>
        ;
})