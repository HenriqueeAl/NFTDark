"use client";

import styles from './header.module.scss'
import { useState } from 'react';

export const Header = () => {

    const [select, setSelect] = useState(0);

    return (
        <>
            <div className={styles.left}></div>
            <header className={styles.header}>
                <div className={styles.img}>
                    <img src='logo.png'></img>
                </div>
                
                <div className={styles.rigth}>
                    <nav>
                        <ul>
                            <li className={select == 0 ? styles.select : styles.none} onClick={()=>setSelect(0)}>Explore</li>
                            <li className={select == 1 ? styles.select : styles.none} onClick={()=>setSelect(1)}>Creators</li>
                            <li className={select == 2 ? styles.select : styles.none} onClick={()=>setSelect(2)}>Community</li>
                        </ul>
                    </nav>
                    <button>Connect Wallet</button>
                    <nav className={styles.mobile}>
                        <img src='./menu.png'></img>
                        <ul>
                            <li className={select == 0 ? styles.select : styles.none} onClick={()=>setSelect(0)}>Explore</li>
                            <li className={select == 1 ? styles.select : styles.none} onClick={()=>setSelect(1)}>Creators</li>
                            <li className={select == 2 ? styles.select : styles.none} onClick={()=>setSelect(2)}>Community</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
} 