
import React, {useCallback, useEffect} from "react";
import {Header} from "./Header";

export const HeaderHoc=()=>{
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

    let ParticleParamsDots = {
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

    let ParticleParamsLines = {
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

    return (<Header params={ParticleParamsLines} params1={ParticleParamsDots}/>)
}