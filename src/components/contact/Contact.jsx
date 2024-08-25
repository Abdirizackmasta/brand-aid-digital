import { FaArrowLeftLong } from "react-icons/fa6";
import styles from './Contact.module.css'
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { useState } from "react";

function Contact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        // keys
        const service_id = 'service_x85jum5';
        const template_id = 'template_nd7thkj';
        const public_key = 'Von18_dAjskZ9OaaV';

        // templateParams
        const templateParams = {
            from_name: name,
            to_name: 'brand-aid',
            from_email: email,
            from_phone: phone,
            from_date: date,
            from_time: time,
            message: message,
        };

        emailjs.send(service_id, template_id, templateParams, public_key)
            .then((res) => {
                console.log('SUCCESS!', res);
                setName('');
                setPhone('');
                setEmail('');
                setDate('');
                setTime('');
                setMessage('');
            }, (error) => {
                console.log('FAILED...', error.text);
            });
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Link className={styles.back} to='/'><FaArrowLeftLong /></Link>
                <p className={styles.title}>Contact <span>Us</span></p>
            </div>
            <div className={styles.right}>
                <form onSubmit={handleSubmit}>
                    <label>Name*</label>
                    <input 
                        type="text" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Phone Number*</label>
                    <input 
                        type="number" 
                        required 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <label>Email*</label>
                    <input 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Book Date*</label>
                    <input 
                        type="date" 
                        required 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <label>Choose time*</label>
                    <select 
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    >
                        <option value="0900">0900</option>
                        <option value="1100">1100</option>
                        <option value="1300">1300</option>
                        <option value="1500">1500</option>
                        <option value="1700">1700</option>
                        <option value="1900">1900</option>
                        <option value="2100">2100</option>
                        <option value="2300">2300</option>
                        <option value="0100">0100</option>
                    </select>
                    <label>Please share anything that will help prepare for our meeting</label>
                    <textarea 
                        required 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button type="submit" onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
