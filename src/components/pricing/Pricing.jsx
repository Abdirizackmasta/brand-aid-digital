import styles from './Pricing.module.css'
import logo from '../../assets/logobg.png'
import Logo from '../logo/Logo'
function Pricing() {
    return (
        <div className={styles.container} id='pricing'>
            <Logo />
            <div className={styles.pricingHero}>
                <h1>Our <span>Pricing</span></h1>
            </div>
            <div className={styles.packages}>
                <div className={styles.package1}>
                    <p className={styles.packageTitle1}>STARTER PACKAGE</p>
                    <h1>$1599/pm</h1>
                    <ul>
                        <li>BrandDevelopment</li>
                        <li>SocialMedia Marketing</li>
                        <li>WebDesign & Development</li>
                        <li>SEO & SEM</li>
                        <li>Analytics & Reporting.</li>
                    </ul>
                </div>
                <div className={styles.package2}>
                    <p  className={styles.packageTitle2}>
                        GROWTH PACKAGE
                    </p>
                    <h1>$1599/pm</h1>
                    <ul>
                        <li>BrandDevelopment</li>
                        <li>SocialMedia Marketing</li>
                        <li>WebDesign & Development</li>
                        <li>SEO & SEM</li>
                        <li>Analytics & Reporting.</li>
                    </ul>
                </div>
                <div className={styles.package3}>
                    <p  className={styles.packageTitle3}>PREMIUM PACKAGE</p>
                    <h1>$1599/pm</h1>
                    <ul>
                        <li>BrandDevelopment</li>
                        <li>SocialMedia Marketing</li>
                        <li>WebDesign & Development</li>
                        <li>SEO & SEM</li>
                        <li>Analytics & Reporting.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pricing
