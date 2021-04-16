import React from 'react'
import s from './Main.module.css'
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
// import Tilt from 'react-tilt'


function Main() {
    return (
        <div id='main' className={s.mainBlock}>
            <Fade bottom>

                <div className={s.text}>
                    <p><ReactTypingEffect text={'Frontend Developer'}
                                          speed={300}
                                          typingDelay={1000} cursor='_'/></p>
                    <h1><span>Bakun</span> Viktoryia</h1>
                </div>


            </Fade>
        </div>

    );
}

export default Main;
