import styles from './paterns.module.scss'

export const Paterns = () => {
    return (
        <section className={styles.paterns}>
            <ul className={styles.ulpaterns}>
                <li><img src='/coinbase.png' className={styles.ma850}></img><img src='/coinbase-.png' className={styles.me850}></img></li>
                <li><img src='/blockchain.png' className={styles.ma850}></img><img src='/blockchain-.png' className={styles.me850}></img></li>
                <li><img src='/binance.png' className={styles.ma850}></img><img src='/binance-.png' className={styles.me850}></img></li>
                <li><img src='/bitmex.png' className={styles.ma850}></img><img src='/bitmex-.png' className={styles.me850}></img></li>
            </ul>
        </section>
    )
} 