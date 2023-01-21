import styles from './cardlive.module.scss'

interface cardlive{
    img: string;
}

export const Cardlive = (props : cardlive) => {
    return (
        <div className={styles.cardlive}>
            <div className={styles.container}>
                <div className={styles.img} style={{backgroundImage: "url("+props.img+")"}}>
                    <div className={styles.count}>
                        <p>03:18:24</p>
                    </div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.perfil}>
                        <div className={styles.left}>
                            <img src='liveperson.png'></img>
                            <div className={styles.author}>
                                <p className={styles.authorp}>
                                    Virtual Art
                                </p>
                                <p className={styles.authorp2}>
                                    by @wzard
                                </p>
                            </div>
                        </div>
                        <div className={styles.rigth}>
                            <img src='/heart.png'></img>
                            <p>92</p>
                        </div>
                    </div>
                    <div className={styles.price}>
                        <p className={styles.pricep}>Current Bid</p>
                        <p className={styles.pricep2}>4.89 ETH</p>
                    </div>
                </div>
                <button className={styles.bottom}>
                    Place a bid
                </button>
            </div>
        </div>
    )
} 