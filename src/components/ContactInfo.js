import React from "react";
import "./contact.css";
import { MdLocationOn } from "react-icons/md";
import { AiFillMail, AiFillLinkedin } from "react-icons/ai";

function ContactInfo() {
  return (
    <div className="contact-header">
      <h1>I'd Love To Connect With You.</h1>
      <p>Let me get to know more about you.</p>
      <div className="contact-way">
        <div className="contact-loc">
          <a href="https://www.uh.edu" target="_blank" rel="noreferrer">
            <h4 className="icons">
              {" "}
              <MdLocationOn />{" "}
            </h4>
          </a>
          <h2>Where to find me</h2>
          <p>4800 Calhoun Rd, Houston, TX 77004</p>
          <p>University of Houston</p>
        </div>
        <div className="contact-email">
          <a
            href="mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="icons">
              {" "}
              <AiFillMail />{" "}
            </h4>
          </a>
          <h2> Email Me At</h2>
          <p> khuedo97@gmail.com </p>
        </div>
        <div className="contact-connect">
          <a
            href="https://www.linkedin.com/in/khue-do-6352b0220/"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="icons">
              {" "}
              <AiFillLinkedin />{" "}
            </h4>
          </a>
          <h2>Let's Connect</h2>
          <p>LinkedIn Profile</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
