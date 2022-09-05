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
          I am a junior studying Computer Science and also a teaching assistant
          of Intro to Prommaning course using Python at University of Houston. I
          will complete my bachelor's degree in December 2023. I used to major
          in Biochemistry, but I get interested in coding, and web development.
          I finally changed major to Computer Science last year. I've been
          studying hard and always be a top student in class. Besides, I did
          some projects regarding web development.
        </div>

        <div className="column-container">
          <div className="profile">
            {" "}
            <h2>PROFILE</h2>
            <p>
              I'm looking for an internship as a software engineer or a web
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
            <h3>MS SUITE</h3>
            <div className="bar">
              <div className="bar-fill1"></div>
              <span className="bar-text">90%</span>
            </div>
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
              <span className="bar-text">70%</span>
            </div>
            <h3>R/R Studio</h3>
            <div className="bar">
              <div className="bar-fill3"></div>
              <span className="bar-text">70%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
