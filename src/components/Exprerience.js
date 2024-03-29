import React from "react";
import "./Experience.css";

function Exprerience() {
  return (
    <>
      <div className="Experience">
        <h1> More of my credentials.</h1>
        <p> Here are my work experience and education</p>
      </div>
      <div className="resume-header">
        <h2>Background Education</h2>
        <div className="resume-timeline">
          <div className="timeline-wrap">
            <div className="timeline_header">
              <h3>Bachelor Degree</h3>
              <p>December 2023</p>
              <h3>Associate Degree</h3>
              <p> December 2020</p>
            </div>

            <div className="timeline-content">
              <h4> University of Houston</h4>
              <p>• Major in computer science.</p>
              <p> • Minor in Mathematics. </p>
              <p> • Got the Transfer Excellence Schorlarship.</p>
              <h4>Houston Comunity College</h4>
              <p>• Major in Computer Science.</p>
              <p>• GPA: 4.00/4.00, Dean's List for 4 semesters.</p>
              <p>• Graduated with Summa Cum Laude</p>
            </div>
          </div>
        </div>
        <h2> Experience </h2>
        <div className="resume-timeline">
          <div className="timeline-wrap">
            <div className="experience_header">
              <h3>Software Development Intern</h3>
              <p> December 2022 - Present</p>
              <h3>Teaching assistant</h3>
              <h5 className="time1">August 2022 - December 2022</h5>
              <h3>Volunteer</h3>
              <p> 2018 - 2019</p>
            </div>

            <div className="timeline-content">
              <h4>
                Heavy Construction Systems Specialists (HCSS), Sugar Land (TX)
              </h4>
              <p>
                {" "}
                • Handled numerous requests to modify SaaS product
                subscriptions, fix reported defects, and perform improvements to
                functionality in user management application for over 2,000
                clients with over 100,000 user accounts.{" "}
              </p>{" "}
              <p>
                • Accelerated API integration, reducing process time by 50% to
                boost webpage performance.{" "}
              </p>{" "}
              <p>
                {" "}
                • Implemented visually appealing Two-Factor Authentication (2FA)
                page and a responsive footer component in React, utilizing CSS
                for seamless user experience.
              </p>
              <p>
                {" "}
                • Developed E2E tests for a client application using Cypress.io,
                resulting in a 90% reduction in manual testing time.
              </p>
              <h4>University of Houston</h4>
              <p>
                {" "}
                • Assisted the professor in teaching and answering question for
                250+ students during lectures.{" "}
              </p>{" "}
              <p>
                • Hosted weekly recitations and one-on-one virtual office hours
                to reinforce materials presented on class.{" "}
              </p>{" "}
              <p>
                {" "}
                • Graded 200+ assignments on multiple algorithm topics, reviewed
                their code, and advice to debug.
              </p>
              <h4>Lyons Avenue Renaissance Festival</h4>
              <p>
                • Make signs, decorations for the upcoming festival and to
                promote the event in the neighborhood by sharing postcards and
                posters to local businesses
              </p>
              <h4>Run for the Rose Fantastic Floaters</h4>
              <p>
                • Lead the runners with a short walk to start the race, close up
                the race route, help folks get where need to go, cheer
                participants on, wrap things up at the end of day and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exprerience;
