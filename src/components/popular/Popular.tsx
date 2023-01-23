import { Title } from '../title/Title'
import { Viewall } from '../viewall/Viewall'
import { Cardpopular } from './cardpopular/Cardpopular'
import styles from './popular.module.scss'

export const Popular = () => {
    return (
        <section className={styles.popular}>
            <Title text='Popular Collections' color='#E03054'></Title>
            <div className={styles.cards}>
                <Cardpopular img='/cardpopular1.png'></Cardpopular>
                <Cardpopular img='/cardpopular2.png'></Cardpopular>
                <Cardpopular img='/cardpopular1.png'></Cardpopular>
            </div>
            <div className={styles.arrow}>
                <img src='arrow.png'></img>
            </div>
            <Viewall></Viewall>
        </section>
    )
} 