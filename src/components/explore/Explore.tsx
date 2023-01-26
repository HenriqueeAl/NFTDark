import { Title } from '../title/Title'
import { Viewall } from '../viewall/Viewall'
import { Cardexplore } from './cardexplore/Cardexplore'
import styles from './explore.module.scss'

export const Explore = () => {
    return (
        <section className={styles.explore}>
            <Title text='Explore By Categories' color='#8613A5'></Title>
            <div className={styles.cards}>
                <Cardexplore img='/cardexplore1.png'></Cardexplore>
                <Cardexplore img='/cardexplore2.png'></Cardexplore>
                <Cardexplore img='/cardexplore3.png'></Cardexplore>
                <Cardexplore img='/cardexplore2.png'></Cardexplore>
            </div>
            <Viewall></Viewall>
        </section>
    )
} 