import React from "react";
import {Fade} from "react-reveal";

export function Contact() {
    return <section id={"contact"} className={"contact"}>
        <div className="container">
            <div className="titleSection">Contact</div>
            <form className="contactForm">
                <Fade bottom>
                    <input required placeholder='Name' type="text" className={"formContorl"}/>
                </Fade>
                <Fade bottom>
                    <input required placeholder='Email' type="email" className={"formContorl"}/>
                </Fade>
                <Fade bottom>
                    <textarea required placeholder='Yor message' className={"formContorl"}/>
                </Fade>
                <Fade bottom>
                    <button type="submit">Send Message</button>
                </Fade>
            </form>
        </div>
    </section>;
}