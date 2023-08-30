import React from "react";
import "../App.css";
import "./HomePage.css";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import img from "./images/home.jpg";

function HomePage() {
  return (
    <div className="hero-container">
      <img src={img} alt="" className="home-pic" />
      <h1>Khue Do</h1>
      <p> Software Development Intern at HCSS && Computer Science student at
        University of Houston</p>
      <ul className="web-logo">
        <li className="logo-item">
          <a
            href="https://github.com/KhueDo276"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="connect-links">
              {" "}
              <AiFillGithub />{" "}
            </h4>
          </a>
        </li>
        <li className="logo-item">
          <a
            href="https://www.linkedin.com/in/khue-do-6352b0220/"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="connect-links">
              {" "}
              <AiFillLinkedin />{" "}
            </h4>
          </a>
        </li>
        <li className="logo-item">
          <a
            href="mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="connect-links">
              <AiFillMail />
            </h4>
          </a>
        </li>
      </ul>
      <div className="thanks">
        Hi there, thanks for visting my website! I'd love to connect with you :){" "}
      </div>
    </div>
  );
}

export default HomePage;
