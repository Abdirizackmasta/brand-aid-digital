import logo from '../../assets/logobg.png'
import hero from '../../assets/hero.jpg'
import styles from './Nav.module.css'


function Nav() {
    return (
        <div className={styles.container}>
            <div className={styles.upperNav}>
                <div>
                    <img src={logo} alt="logo" className={styles.logo}/>
                </div>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">Values</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Why Choose Us</a></li>
                </ul>
            </div>
            <div className={styles.lowerNav}>
                <div className={styles.leftLowerNav}>
                    <div>
                        <h1>Navigating the digital <span>landscape for success!</span></h1>
                    </div>
                    <div className={styles.heroContent}>
                        <p>We empower organizations with tailored digital solutions, including system assessments, API development, SEO, PPC, and custom software development. Achieve growth and efficiency with brand aid digital.</p>
                    </div>
                    <div className={styles.buttonsDiv}>
                        <button>Contact for Consultation</button>
                        <button>Learn More&#8595;</button>
                    </div>
                    {/* <div></div> */}
                </div> 
                <div className={styles.rightLowerNav}>
                    <img src={hero} alt="hero-image" />
                </div> 
            </div>
        </div>
    )
}

export default Nav
