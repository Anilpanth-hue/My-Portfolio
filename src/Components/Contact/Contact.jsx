import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d31a6542-ac03-4f16-b468-2e906e822b98");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      window.location.reload();
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you want me to work on. You can
            contact anytime'
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p className="mail-react">anilpanth44@gmail.com</p>
            </div>
            <a
              href="http://www.linkedin.com/in/anil-panth-b060a2256"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-detail">
                <CiLinkedin className="react-icon" />
                <p className="reacts-icon">LinkedIn</p>
              </div>
            </a>
            <a
              href="https://github.com/Anilpanth-hue"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-detail">
                <AiFillGithub className="react-icon" />
                <p className="reacts-icon">GitHub</p>
              </div>
            </a>
            <a
              href="https://x.com/home?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-detail">
                <FaTwitter className="react-icon" />
                <p className="reacts-icon">X</p>
              </div>
            </a>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Haryana, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your Email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
