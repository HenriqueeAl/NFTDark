import styles from './cardcreators.module.scss'

export const Cardcreators = () => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <img src='/creatorsperson1.png'></img>
                <div className={styles.texts}>
                    <p className={styles.name}>Wzard Dee</p>
                    <p className={styles.price}>4.89 ETH</p>
                </div>
                <div className={styles.items}>
                    <p className={styles.value}>33</p>
                    <p className={styles.name}>items</p>
                </div>
            </div>
        </div>
    )
} 