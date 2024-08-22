import { Link } from 'react-router-dom'
import Logo from '../logo/Logo'
import styles from './Nav.module.css'

function Nav() {
    return (
           <div className={styles.upperNav}>
                <Link><Logo /></Link>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#values">Values</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#whyus">Why Choose Us</a></li>
                </ul>
            </div>
    )
}

export default Nav
