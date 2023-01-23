import styles from './cardpopular.module.scss'

interface cardpopular {
    img: string
}

export const Cardpopular = (props: cardpopular) => {
    return (
        <div className={styles.card}>
            <img src={props.img}></img>
            <div className={styles.perfil}>
                <div className={styles.left}>
                    <img src='/popularperson.png'></img>
                    <p className={styles.name}>@wzard</p>
                </div>
                <p className={styles.id}>ERC-721</p>
            </div>
        </div>
    )
} 