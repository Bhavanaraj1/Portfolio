import React from 'react'
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg"
//import profile_img from "../../assets/profile_img.svg"
import My_Img from '../../assets/My_Img.png'
const About = () => {
  return (
    <div id = "about" className = "about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt =""/>
        </div>
        <div className="about-sections">
        <div className="about-left">
            <img src={My_Img} alt =""/>
        </div>
        <div className="about-right">
        <div className="about-para">
          <p>I am highly Analytical, collaborative, and passionate software developer with 2+ years' experience having deep understanding of front-end development best practices developing a web application</p>
          <p>Quick learner of new things,hard working and enthusiastic </p>
        </div>
        <div className="about-skills">
        <div className="about-skill"><p> HTML & CSS</p><hr style = {{width:"50%"}}/></div>
        <div className="about-skill"><p> React.js</p><hr style = {{width:"70%"}}/></div>
        <div className="about-skill"><p> JavaScript</p><hr style = {{width:"60%"}}/></div>
        <div className="about-skill"><p> Java </p><hr style = {{width:"50%"}}/></div>
        </div>
        </div>
        </div>
        <div className="about-achievements">
        <div className="about-achievement">
        <h1>02+</h1>
        <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
        <h1>03+</h1>
        <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>

        </div>

    </div>
  )
}

export default About