import { Title } from '../title/Title'
import { Viewall } from '../viewall/Viewall'
import { Cardcreators } from './cardcreators/Cardcreators'
import styles from './creators.module.scss'

export const Creators = () => {
    return (
        <section className={styles.creators}>
            <Title text='Top Creators' color='#E03054'></Title>
            <div className={styles.cards}>
                <Cardcreators></Cardcreators>
                <Cardcreators></Cardcreators>
                <Cardcreators></Cardcreators>
                <Cardcreators></Cardcreators>
            </div>
            <Viewall></Viewall>
        </section>
    )
} 