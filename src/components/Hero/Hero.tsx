import styles from './hero.module.scss'

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.rigth}></div>
            <div className={styles.left}></div>
            <div className={styles.content}>
                <div className={styles.l}>
                    <h1>Explore, Buy and Sell the <strong>Best NFTs!</strong></h1>
                    <div>
                        <button className={styles.explore}>Explore</button>
                        <button className={styles.create}>Create</button>
                    </div>
                    <div className={styles.comment}>
                        <div className={styles.comments}>
                            <h5>35k+</h5>
                            <p>Artworks</p>
                        </div>
                        <div className={styles.comments}>
                            <h5>20k+</h5>
                            <p>Auctions</p>
                        </div>
                        <div className={styles.comments}>
                            <h5>12k+</h5>
                            <p>Creators</p>
                        </div>
                    </div>
                </div>
                <div className={styles.r}>
                    <div className={styles.card}>
                        <div className={styles.topo}>
                            <div className={styles.topot}>
                                <p className={styles.topotp}>Current bid</p>
                                <p className={styles.topotp2}>0.99 ETH</p>
                            </div>
                            <div className={styles.topot}>
                                <p className={styles.topotp}>Ends in</p>
                                <p className={styles.topotp2}>25 hrs</p>
                            </div>
                        </div>
                        <div className={styles.baixo}>
                            <div className={styles.artist}>
                                <p className={styles.artistp}>Artist</p>
                                <p className={styles.artistp2}>@wzard</p>
                            </div>
                            <button className={styles.button}>Start Bid</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 