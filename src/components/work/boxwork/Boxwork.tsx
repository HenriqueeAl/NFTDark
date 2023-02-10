import styles from './boxwork.module.scss'

interface boxwork{
    img: string;
    text: string;
    firts: boolean;
}

export const Boxwork = (props: boxwork) => {
    return (
        <div className={styles.boxwork}>
            {props.firts == true ? <></> : <div className={styles.los}></div>}
            <div className={styles.center}>
                <img src={props.img}></img>
            </div>
            <p>{props.text}</p>
        </div>
    )
} 