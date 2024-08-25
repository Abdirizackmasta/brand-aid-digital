import { motion } from "framer-motion";



import mainImg from '../../assets/teamwork.webp'
import Logo from '../logo/Logo'
import styles from './Values.module.css'
import { fadeIn, textVariant } from "../../hooks/motion";
function Values() {
    return (
        <div className={styles.container} id='values'>
            <Logo />
            <h1>Company <span>Values</span></h1>
            <div className={styles.infoDev}>
                <div className={styles.left}>
                    <img src={mainImg} alt="main-image" />
                </div>
                <motion.div className={styles.right} variants={textVariant(0.5)} >
                    <div>
                        <p className={styles.title}>INNOVATION</p>
                        <p>We are committed to staying ahead of the curve by leveraging cutting-edge technologies and creative strategies to deliver unique and impactful solutions.</p>

                    </div>
                    <div>
                        <p className={styles.title}>CLIENT-FIRST</p>
                        <p>We focus on understandingandmeetingthe unique needs of each client, ensuring a personalized approach that prioritizes their satisfaction and long-term success.</p>
                    </div>
                    <div>
                        <p className={styles.title}>INTEGRITY</p>
                        <p>We uphold ethical standards and transparency in all our dealings, fostering trust and building strong, long-lasting relationships with our clients and partners.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Values
