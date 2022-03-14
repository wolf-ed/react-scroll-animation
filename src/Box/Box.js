import React, { useRef, useEffect, useState } from "react";
import '../index.css';


const Box = () => {
    const elementRef = useRef(null);
    const [boxStyle, setBoxStyle] = useState('box');

    const handleScroll = () => {

        const windowsHeight = window.innerHeight / 5 * 3.5;
        const boxsHeight = elementRef.current.getBoundingClientRect().top

        if (boxsHeight < windowsHeight) {
            setBoxStyle('box show')
        } else {
            setBoxStyle('box')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])


    return <div
        className={boxStyle}
        ref={elementRef}
    >
        <h2>Box</h2>
    </div>
}

export default Box