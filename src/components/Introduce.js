import React from "react";
import "./Introduce.css";
import img1 from "./images/image1.png";

function Introduce() {
  return (
    <div className="intro">
      <h1>Let me introduce myself</h1>
      <div className="heading">
        <img src={img1} className="profile-pic" alt="" />
        <div className="para">
          Greetings! I'm an enthusiastic senior graduating in December 2023,
          actively on the lookout for an exciting full-time role as a software
          developer. With a strong background in programming and a passion for
          creating innovative solutions, I'm dedicated to contributing my skills
          to a dynamic team. My commitment, coupled with a proven track record
          in various projects, reflects my readiness to embark on a rewarding
          career in the world of software development. I'm eager to connect with
          opportunities that align with my aspirations and make a meaningful
          impact.
        </div>

        <div className="column-container">
          <div className="profile">
            {" "}
            <h2>PROFILE</h2>
            <p>
              I'm looking for an full-time role as a software engineer or a web
              developer. If you think I'm a good fit, please contact me via
              khuedo97@gmail.com{" "}
            </p>
            <h3>FULLNAME:</h3>
            <p> Khue Nhat Do</p>
            <h3> EMAIL: </h3>
            <p>khuedo97@gmail.com</p>
          </div>
          <div className="skill">
            <h2>SKILLS</h2>
            <p>
              {" "}
              I'm a cell-like independent teamworker, strong in research and
              coding. My areas of expertise are computer science. Below are
              higlights of my technical skills:
            </p>
            <h3>PYTHON</h3>
            <div className="bar">
              <div className="bar-fill1"></div>
              <span className="bar-text">90%</span>
            </div>
            <h3>C/C++</h3>
            <div className="bar">
              <div className="bar-fill2"></div>
              <span className="bar-text">80%</span>
            </div>
            <h3>JS/REACT</h3>
            <div className="bar">
              <div className="bar-fill3"></div>
              <span className="bar-text">80%</span>
            </div>
            <h3>TypeScript</h3>
            <div className="bar">
              <div className="bar-fill1"></div>
              <span className="bar-text">70%</span>
            </div>
            <h3>CSS</h3>
            <div className="bar">
              <div className="bar-fill3"></div>
              <span className="bar-text">90%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
