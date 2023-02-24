import { Title } from '../title/Title'
import styles from './ready.module.scss'

export const Ready = () => {
    return (
        <div className={styles.ready}>
            <Title text='Ready for Next NFT Drop?' color={'transparent'}></Title>
            <form>
                <input placeholder='info@gmail.com'></input>
                <button>Subscribe</button>
            </form>
        </div>
    )
} 