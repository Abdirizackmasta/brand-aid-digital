import styles from './Services.module.css';

// images
import digital from '../../assets/digitalbg.png';
import contentmarketing from '../../assets/contentbg.png';
import content from '../../assets/CONTENT.png';
import branding from '../../assets/branding.png';
// import logodesign from '../../assets/logodesign.png';
import seo from '../../assets/SEO-bg.png';
// import webdesign from '../../assets/webdesign-bg.jpg';
import websites from '../../assets/websites.png';
// import marketing from '../../assets/marketing.png';
import socialmedia from '../../assets/social-media.png';
import ghl from '../../assets/GHLbg.png';
import analytics from '../../assets/analyticsbg.png';
import email from '../../assets/emailmarketingbg.png'
import Logo from '../logo/Logo';
import { fadeIn, slideIn, staggerContainer } from '../../hooks/motion';
import {motion} from 'framer-motion'


const servicesList = [
    {
        image: digital,
        title: 'Digital Strategy',
        description:'Crafting unique brand identities and messaging.'
    },
    {
        image: branding,
        title: 'Brand Development',
        description:'Comprehensive planning and execution to achieve business goals.'
    },
    {
        image: socialmedia,
        title: 'Social Media Marketing',
        description:'Creating compelling content to attract and retain customers.'
    },
    {
        image: contentmarketing,
        title: 'Content Marketing',
        description:'Engaging and growing audience across social platforms.'
    },
    {
        image: seo,
        title: 'SEO & SEM',
        description:'Optimizing search presence and managing paid search campaigns.'
    },
    {
        image: websites,
        title: 'Web Design and Development',
        description:'Building user-friendly and visually appealing websites.'
    },
    {
        image: email,
        title: 'Email Marketing',
        description:'Designing campaigns that drive engagement and conversions.'
    },
    {
        image: analytics,
        title: 'Analytics & Reporting',
        description:'Measuring performance and providing actionable insights.'
    },
    {
        image: ghl,
        title: 'GHL (GoHighLevel) Services',
        description:'Utilizing GoHighLevel for all-in-one sales and marketing automation, including CRM management, automated follow-ups, and pipeline management.'
    },
    {
        image: content,
        title: 'Content Marketing and Production',
        description:'Developing and producing high-quality content tailored to resonate with the Kenyan audience.'
    },
];

function Services() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="show"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={styles.container} id='services'>
            <Logo />
            <motion.div className={styles.header}
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <motion.h1 variants={fadeIn("left", "tween", 0.4, 1)}>Our <span>Services</span></motion.h1>
            </motion.div> 
            <div className={styles.services}>
               {servicesList.map((service, index) => (
                <div key={index} className={styles.service}>
                    <img src={service.image} alt="" />
                    <motion.h1 variants={fadeIn("left", "tween", 0.4, 1)}>{service.title}</motion.h1>
                    <p className={styles.description}>{service.description}</p>
                </div>
            ))}
            </div> 
        </motion.div>
    )
}

export default Services
