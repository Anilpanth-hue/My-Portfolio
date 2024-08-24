import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import My_profile from "../../assets/My_profile.jpg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={My_profile} alt="" />
      <h1>
        <span>Hi, I'm Anil Panth,</span> Software Developer.
      </h1>
      <p>
        I am an Aspiring Software Developer, eager to launch my career and gain
        valuable experience by working with leading companies in the tech
        industry. As a fresher, I am driven to contribute my skills and passion
        to innovative projects and collaborate with top professionals in the
        field.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me{" "}
          </AnchorLink>
        </div>
        <a
          href="https://drive.google.com/file/d/1Rd-KGFEI0Dz9gDsZ0G8NShGcT0aUKVI2/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
