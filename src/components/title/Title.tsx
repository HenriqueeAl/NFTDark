import styles from './title.module.scss'

interface title {
    text: string
    color: string | null
}

export const Title = (props : title) => {
    return (
        <div className={styles.center}>
            {props.color == null ? <></> : <div className={styles.ball} style={{backgroundColor: `${props.color}` }}></div>}
            <h1 className={styles.title}>{props.text}</h1>
        </div>
    )
} 