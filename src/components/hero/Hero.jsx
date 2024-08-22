import hero from '../../assets/hero.jpg'
import Nav from '../nav/Nav'
import styles from './Hero.module.css'
import { Link } from 'react-router-dom'


function Hero() {
    return (
        <div className={styles.container}>
            <Nav />
            <div className={styles.lowerNav}>
                <div className={styles.leftLowerNav}>
                    <div>
                        <h1>Navigating the digital <span>landscape for success!</span></h1>
                    </div>
                    <div className={styles.heroContent}>
                        <p>We empower organizations with tailored digital solutions, including system assessments, API development, SEO, PPC, and custom software development. Achieve growth and efficiency with brand aid digital.</p>
                    </div>
                    <div className={styles.buttonsDiv}>
                        <Link to='/contact'>
                            <button>Contact for Consultation</button>
                        </Link>
                        <a href="#about">
                            <button>Learn More&#8595;</button>
                        </a>
                    </div>
                </div> 
                <div className={styles.rightLowerNav}>
                    <img src={hero} alt="hero-image" />
                </div> 
            </div>
        </div>
    )
}

export default Hero
