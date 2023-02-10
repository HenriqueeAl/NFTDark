import styles from './footer.module.scss'
import { TiSocialYoutube, TiSocialTwitter, TiSocialFacebook, TiSocialGooglePlus } from 'react-icons/ti';

export const Footer = ()=> {
    return (
        <footer className={styles.footer}>
            <div className={styles.l50}>
                <img src='./logo-footer.png'></img>
                <div className={styles.r}>
                    <p>Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla pharetra gravida est. </p>
                    <ul>
                        <li><TiSocialYoutube></TiSocialYoutube></li>
                        <li><TiSocialTwitter></TiSocialTwitter></li>
                        <li><TiSocialFacebook></TiSocialFacebook></li>
                        <li><TiSocialGooglePlus></TiSocialGooglePlus></li>
                    </ul>
                    <p>All rights reserved@2021</p>
                </div>
            </div>
            <div className={styles.r50}>
                <div className={styles.about}>
                    <h6>About Us</h6>
                    <ul>
                        <li>About NFTs</li>
                        <li>Live Auctions</li>
                        <li>NFT Blog</li>
                        <li>Activity</li>
                    </ul>
                </div>
                <div className={styles.support}>
                    <h6>Support</h6>
                    <ul>
                        <li>Help & Support</li>
                        <li>Item Details</li>
                        <li>Author Profile</li>
                        <li>Collection</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}