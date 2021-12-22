import React from "react";
import resume from "../../assets/resume/Resume.pdf";

const Resume = () => (
    <section className="container" id="resume">
        <h1>Resume</h1>
        <div className="skills-wrapper">
            <div className="skills">
                <h4>Skills</h4>
                <ul>
                    <li>HTML/ CSS/ Bootstrap</li>
                    <li>Git</li>
                    <li>JavaScript/ jQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>REST APIs</li>
                    <li>Node.js/ Express.js</li>
                    <li>Express</li>
                    <li>MySQL/ Sequelize</li>
                    <li>MongoDB/ Mongoose</li>
                </ul>
            </div>
        </div>
        <button className="btn btn-lg">
            <a href={resume} download="PamelaResume">Download Resume</a>
        </button>
    </section>
)

export default Resume;