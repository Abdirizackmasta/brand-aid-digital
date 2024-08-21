import styles from './WhyUs.module.css'
import logo from '../../assets/logobg.png'
import { HiMiniBars3 } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";
import { MdLibraryBooks } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import { PiNotebookDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

const whyChose = [
    {
        span: 'Cutting edge tools',
        icon: <FiSettings />,
        content: 'We utilize the latest tools and platforms,including Go High Level,to optimize your digital marketing efforts and streamline processes.'
    },
    {
        span: 'Customized Strategies',
        icon: <HiMiniBars3 />,
        content: 'We tailor ourstrategies to fit your specific business goals and market conditions, ensuring personalized and effective solutions.'
    },
    {
        span: 'Transparent Reporting',
        icon: <MdLibraryBooks />,
        content: 'We provide clear and detailed reports, keeping you informed about your campaign\'s performance and ROI.'
    },
    {
        span: 'Expert Team',
        icon: <CgProfile />,
        content: 'Your success is our priority, we are dedicated to providing exceptional customer service and ongoing support to ensure your satisfaction.'
    },
    {
        span: 'Proven Track Record',
        icon: <PiNotebookDuotone />,
        content: 'We have a history of delivering measurable results, helping clients grow their brand visibility, engagement and coversions.'
    },
    {
        span: 'Client-centric approach',
        icon: <MdGroups2 />,
        content: 'We have a history of delivering measurable results, helping clients grow their brand visibility, engagement and coversions.'
    },


]
function WhyUs() {
    return (
        <div className={styles.container}>
            <img src={logo} alt="logo" className={styles.logo} />
            <h1>Why Choose <span>US</span></h1>
         <div className={styles.detailsContainer}>
            {whyChose.map((detail, index) => (
                <div key={index} className={styles.detail}>
                    <h3>{detail.span}</h3>
                    <p className={styles.icon}>{detail.icon}</p>
                    <p className={styles.content}>{detail.content}</p>
                </div>
            ))}
        </div>
        </div>
    )
}

export default WhyUs
