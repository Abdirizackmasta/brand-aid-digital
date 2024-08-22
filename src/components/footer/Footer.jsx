import styles from './Footer.module.css'
import footer from '../../assets/footerbanner.jpeg'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import Logo from '../logo/Logo';



function Footer() {
    return (
        <footer>
            <Logo />
            <div className={styles.innerContainer}>
                <div>
                    <div>
                        <h1>Get In <span>Touch</span></h1>
                    </div>
                    <div className={styles.contentDiv}>
                        <p>Ready to take your brand to the next level, we're here to help! Whether you need a comprehensive digital strategy or specific services to enhance your online presence, our team is ready to partner with you.</p>
                    </div>
                    <div className={styles.infoDev}>
                        <a href='tel:+1 (614) 526-9138 '>
                            <span className={styles.icon}><IoCall /></span>
                            <span>+1 (614) 526-9138 </span>
                        </a>
                        <a href='www.brandaiddigital.com'>
                            <span className={styles.icon}><TfiWorld /></span>
                            <span>www.brandaiddigital.com</span>
                        </a>
                        <a href='mailto:Inquiries.brandaiddigital@gmail.com'>
                            <span className={styles.icon}><MdEmail /></span>
                            <span>Inquiries.brandaiddigital@gmail.com</span>
                        </a>
                        <a href=''>
                            <span className={styles.icon}><FaLocationDot /></span>
                            <span>00100 - Nairobi, Kenya</span>
                        </a>
                    </div>
                </div>  
                <div>
                    <img src={footer} alt="footer-banner" />
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
