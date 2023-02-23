'use client';

import { useEffect, useState } from 'react';
import styles from './boxwork.module.scss'

interface boxwork{
    img: string;
    text: string;
    firts: boolean;
}

export const Boxwork = (props: boxwork) => {

    const [windowWidth, setWindowWidth] = useState(900);

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    });

    return (
        <div className={styles.boxwork} style={props.firts == false && windowWidth <= 900 ? {marginTop: '120px'} : {}}>
            {props.firts == true ? <></> : <div className={styles.los}></div>}
            <div className={styles.center}>
                <img src={props.img}></img>
            </div>
            <p>{props.text}</p>
        </div>
    )
} 