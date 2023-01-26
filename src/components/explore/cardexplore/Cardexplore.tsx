import styles from './cardexplore.module.scss'

interface explore{
    img: string
}

export const Cardexplore = (props: explore) => {
    return (
        <div className={styles.card}>
            <img src={props.img}></img>
            <div className={styles.perfil}>
                <div className={styles.left}>
                    <img src='/exploreperson.png'></img>
                    <div className={styles.text}>
                        <p className={styles.name}>Virtual Art</p>
                        <p className={styles.by}>by @wzard</p>
                    </div>
                </div>
                <div className={styles.likes}>
                    <img src='/heart.png'></img>
                    <p>92</p>
                </div>
            </div>
            <div className={styles.price}>
                <p className={styles.left}>Current Bid</p>
                <p className={styles.rigth}>4.89 ETH</p>
            </div>
        </div>
    )
} 