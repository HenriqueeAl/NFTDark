import { Title } from '../title/Title'
import { Boxwork } from './boxwork/Boxwork'
import styles from './work.module.scss'

export const Work = () => {
    return (
        <section className={styles.work}>
            <Title text='How it works' color={null}></Title>
            <div className={styles.boxs}>
                <Boxwork img='/workwallet.png' text='Set up your wallet' firts={true}></Boxwork>
                <Boxwork img='/workwallet.png' text='Create your collection' firts={false}></Boxwork>
                <Boxwork img='/workwallet.png' text='Add your NFTs' firts={false}></Boxwork>
                <Boxwork img='/workwallet.png' text='List them for sale' firts={false}></Boxwork>
            </div>
        </section>
    )
} 