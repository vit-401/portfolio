import React from "react";

export function Contact() {
    return <section className={"contact"}>
        <div className="container">
            <div className="contactTitle">Contact</div>

            <form className="contactForm">
                <input required placeholder='Name' type="text" className={"formContorl"}/>
                <input required placeholder='Email' type="email" className={"formContorl"}/>
                <textarea required placeholder='Yor message' className={"formContorl"}/>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>;
}