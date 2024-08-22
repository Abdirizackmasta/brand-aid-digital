import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import styles from './Nav.module.css';
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

function Nav() {
    const [openMenu, setMenuOpen] = useState(false);

    return (
        <div className={styles.upperNav} >
            <Link to="/"><Logo /></Link>
            <ul style={openMenu ? { top: '60px' } : {}}>
                <li><a href="#about">About</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#values">Values</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#whyus">Why Choose Us</a></li>
            </ul>
            <div className={styles.iconsDev}>
                <FaBars onClick={() => setMenuOpen(!openMenu)} />
            </div>
        </div>
    );
}

export default Nav;
