import styles from './paterns.module.scss'

export const Paterns = () => {
    return (
        <section className={styles.paterns}>
            <ul className={styles.ulpaterns}>
                <li><img src='/coinbase.png'></img></li>
                <li><img src='/blockchain.png'></img></li>
                <li><img src='/binance.png'></img></li>
                <li><img src='/bitmex.png'></img></li>
            </ul>
        </section>
    )
} 