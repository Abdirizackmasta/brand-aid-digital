import logo from '../../assets/logobg.png'
import styles from './Logo.module.css'
function Logo() {
    return (
        <div>
            <img src={logo} alt="logo" className={styles.logo}/>
        </div>
    )
}

export default Logo
