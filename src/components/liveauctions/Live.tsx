import { Title } from '../title/Title'
import { Viewall } from '../viewall/Viewall'
import { Cardlive } from './cardlive/Cardlive'
import styles from './live.module.scss'

export const Live = () => {
    return (
        <section className={styles.live}>
            <Title text='Live Auctions' color={'#8613A5'}></Title>
            <div className={styles.arrow}>
                <img src='arrow.png' style={{opacity: '0.4'}}></img>
                <img src='arrow.png' style={{transform: 'rotate(-180deg)'}}></img>
            </div>
            <div className={styles.cards}>
                <Cardlive img='/cardlive1.png'></Cardlive>
                <Cardlive img='/cardlive2.png'></Cardlive>
                <Cardlive img='/cardlive3.png'></Cardlive>
            </div>
            <Viewall></Viewall>
        </section>
    )
} 