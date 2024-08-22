import style from "./Team.module.css";
import clintonImage from "../../assets/clinton.jpg";
import abdiKarim from "../../assets/abdikarin.jpeg";
import abdulImage from "../../assets/abdul.jpeg";
import Logo from '../logo/Logo';

const TeamData = [
    {
        name: "Clinton Omwoyo",
        image: clintonImage,
        position: "Managing Director",
        index: 1,
    },
    {
        name: "Abdikarim Hassan",
        image: abdiKarim,
        position: "Chief Executive Officer",
        index: 2,
    },
    {
        name: "Abdirizack Adan",
        image: abdulImage,
        position: "Chief Operations Officer",
        index: 3,
    },
];
function Team() {
    return (
        <div className={style.container} id='team'>
            <Logo />
            <h1>Meet Our <span>Team</span></h1>
            <div className={style.teamDiv}>
                {TeamData.map((person, index) => (
                    <div key={index} className={style.memberCard}>
                        <img src={person.image} alt={person.name} className="team-member-image" />
                        <h2>{person.name}</h2>
                        <p>{person.position}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
