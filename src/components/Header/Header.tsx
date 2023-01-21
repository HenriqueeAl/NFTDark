import styles from './header.module.scss'

export const Header = () => {
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
                            <li className={styles.select}>Explore</li>
                            <li>Creators</li>
                            <li>Community</li>
                        </ul>
                    </nav>
                    <button>Connect Wallet</button>
                </div>
            </header>
        </>
    )
} 