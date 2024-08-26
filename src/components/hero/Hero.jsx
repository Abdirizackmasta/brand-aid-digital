import hero from '../../assets/hero.jpg'
import Nav from '../nav/Nav'
import styles from './Hero.module.css'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from '../../hooks/motion';



function Hero() {
    return (
        <div className={styles.container}>
            <Nav />
            <motion.div className={styles.lowerNav}
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}>
                <div className={styles.leftLowerNav}>
                    <motion.div variants={fadeIn("right", "tween", 0.2, 0.6)}>
                        <h1>Navigating the digital <span>landscape for success!</span></h1>
                    </motion.div>
                    <motion.div  variants={fadeIn("left", "tween", 0.4, 0.6)} className={styles.heroContent}>
                        <p>We empower organizations with tailored digital solutions, including system assessments, API development, SEO, PPC, and custom software development. Achieve growth and efficiency with brand aid digital.</p>
                    </motion.div>
                    <div className={styles.buttonsDiv}>
                        <Link to='/contact'>
                            <button>Request a quote</button>
                        </Link>
                        <a href="#about">
                            <button>Learn More&#8595;</button>
                        </a>
                    </div>
                </div> 
                <motion.div className={styles.rightLowerNav} variants={fadeIn("up", "tween", 0.3, 1)}>
                    <motion.img variants={slideIn("up", "tween", 0.7, 0.6)} src={hero} alt="hero-image" />
                </motion.div> 
            </motion.div>
        </div>
    )
}

export default Hero
