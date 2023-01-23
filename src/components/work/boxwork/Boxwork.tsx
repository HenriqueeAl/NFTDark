import styles from './boxwork.module.scss'

interface boxwork{
    img: string;
    text: string;
}

export const Boxwork = (props: boxwork) => {
    return (
        <div className={styles.boxwork}>
            <img src={props.img}></img>
            <p>{props.text}</p>
        </div>
    )
} 