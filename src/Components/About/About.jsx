import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Profile_pic from "../../assets/Profile_pic.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={Profile_pic} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
            Hi, I'm Anil Panth, an aspiring Software Developer with a passion for coding. As a fresher, I specialize in HTML, CSS, JavaScript, React, C++, and Data Structures and Algorithms (DSA).  I strive to continuously refine my skills and knowledge in these fields. I'm expanding my skills by learning Node.js for backend development and exploring Appium for software testing. I'm driven to build dynamic, reliable software and eager to contribute to innovative projects.
            </p>
            <p>
            I'm excited about the endless possibilities in software development and am eager to contribute to innovative projects while continuing to learn and grow in this ever-evolving field.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>C++</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React</p> <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>MONTH OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
