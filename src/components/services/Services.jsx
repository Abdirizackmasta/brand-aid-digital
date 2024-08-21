import logo from '../../assets/logobg.png';
import styles from './Services.module.css';

// images
import digital from '../../assets/digitalbg.png';
import contentmarketing from '../../assets/CONTENT.png';
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
        description:'Creating compelling to attract and retain customers.'
    },
    {
        image: contentmarketing,
        title: 'Content Marketing',
        description:'Engaging and growing audience across social platfroms.'
    },
    {
        image: seo,
        title: 'SEO & SEM',
        description:'Optimizing search presence and managing paid search campaigns.'
    },
    {
        image: websites,
        title: 'Web Design and development',
        description:'Buildinguser-friendly and visually appealing websites.'
    },
    {
        image: email,
        title: 'Email Marketing',
        description:'Designing campaigns that drive engagement and conversions.'
    },
    {
        image: analytics,
        title: 'Analytics & Reporting',
        description:'Measuring performancea nd providing actionable insights.'
    },
    {
        image: ghl,
        title: 'GHL(GoHighLevel) services',
        description:'Utilizing GoHighLevel for all-in-one sales and marketing automation, including CRM management,automated follow-ups,and pipeline management.'
    },
    {
        image: contentmarketing,
        title: 'Content Marketing and Production',
        description:' Developing and producing high-quality content tailored to resonate with the Kenyan audience.'
    },
 

]
function Services() {
    return (
        <div className={styles.container}>
            <div>
                <img src={logo} alt="logo" className={styles.logo}/>
            </div> 
            <div className={styles.header}>
                <h1>Our <span>Services</span></h1>
            </div> 
            <div className={styles.services}>
               {servicesList.map((service, index) => (
                <div key={index} className={styles.service}>
                    <img src={service.image} alt="" />
                    <h1>{service.title}</h1>
                    <p className={styles.description}>{service.description}</p>
                </div>
            ))}
            </div> 
        </div>
    )
}

export default Services
