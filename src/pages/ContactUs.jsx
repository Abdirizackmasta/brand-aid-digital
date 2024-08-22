import { Link } from "react-router-dom"
import Contact from "../components/contact/Contact"
import Footer from "../components/footer/Footer"
import Logo from "../components/logo/Logo"
import styles from  './ContactUs.module.css'
function ContactUs() {
    return (
        <div className={styles.container}>
            <Link to='/'> <Logo /> </Link>
            <Contact />
            <Footer />
        </div>
    )
}

export default ContactUs
