import "./mySkillsStyles.css";
import Navbar from "../navbar/Navbar"
import HeroImg2 from "../heroimg2/HeroImg2";
import Footer from "../footer/Footer";
const MySkills = () => {
  return (
    <div className="my_skills">
        <Navbar/>
        <HeroImg2 title="My skills" subtitle="Here is about everything I know"/>
        <div className="stack">
            <div className="frontend stack_cont">
                <h1>Frontend</h1>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>Tailwind.CSS</li>
                    <li>React.js</li>
                </ul>
            </div>

            <div className="backend stack_cont">
                <h1>Backend</h1>
                <ul>
                    <li>Flask</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </ul>
            </div>
        </div>
        <Footer/>

    </div>
  )
}

export default MySkills