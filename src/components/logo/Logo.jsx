import logo from '../../assets/logobg.png'
import styles from './Logo.module.css'
function Logo() {
    return (
        <div className={styles.container}>
            <img src={logo} alt="logo" className={styles.logo}/>
        </div>
    )
}

export default Logo
