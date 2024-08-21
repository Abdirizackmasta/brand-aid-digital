import logo from '../../assets/logobg.png';
import team from '../../assets/team2.png';
// import Backlines from '../backLines/Backlines';
import style from './About.module.css'
function About() {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <img className={style.logo} src={logo} alt="logo" />
                <h1>About <span>Us</span></h1>
                <p>
                    Welcome to Brand Aid Digital Agency where we blend
                    creativity and strategy to boost your brand's online
                    presence. We're an all-in-one digital agency dedicated
                    to coming up with fresh ideas that help businesses of
                    all sizes succeed and grow. We love digital excellence
                    and take a smart approach, making sure every project
                    we take on not only hits the mark but goes above and
                    beyond what our clients hope for.
                    <br />
                    <br />
                    Our team is made up of forward-thinking minds
                    creative souls, and detail-oriented planners. We come
                    from different backgrounds in marketing, design, tech,
                    and business growth. This mix lets us look at problems
                    from many angles giving well-rounded and effective
                    answers. We believe teamwork is key and work hand-in-hand
                    with our clients to get what they need, what
                    they're aiming for, and how their market works.
                </p>
            </div>
            <div className={style.right}>
                <img src={team} alt="about-image" />
            </div>
        </div>
    )
}

export default About
