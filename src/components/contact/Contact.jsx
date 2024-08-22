import { FaArrowLeftLong } from "react-icons/fa6";
import styles from './Contact.module.css'
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Link className={styles.back} to='/'><FaArrowLeftLong /></Link>
                <p className={styles.title}>Contact <span>Us</span></p>
            </div>
            <div className={styles.right}>
                <form action="">
                    <label>Name*</label>
                    <input type="text" required/>
                    <label>Email*</label>
                    <input type="email" required/>
                    <label>Book Date*</label>
                    <input type="date" required/>
                    <label>Choose time*</label>
                    <select name="" id="">
                        <option value="">09:00</option>
                        <option value="">11:00</option>
                        <option value="">13:00</option>
                        <option value="">15:00</option>
                        <option value="">17:00</option>
                    </select>
                    <label>Please share anything that will help prepare for our meeting</label>
                    <textarea name="" id="textarea" required></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
