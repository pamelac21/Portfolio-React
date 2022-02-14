import React from "react";
import resume from "../../assets/resume/Resume.pdf";
import working from "../../assets/images/--about.aee0f771.png"

//import coding from "../../assets/images/development.png"
//<img src={coding} alt="skills"/>

const Resume = () => (
    <section className="container" id="resume">

        <h1>Skills</h1>

        <div className="skills-wrapper">
            <div className="skills">
                <ul>
                    <li>HTML/ CSS/ Bootstrap</li>
                    <li>Git</li>
                    <li>JavaScript/ jQuery</li>
                    <li>REST APIs</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Handlebars</li>
                    <li>Node.js/ Express.js</li>
                    <li>Express</li>
                    <li>MySQL/ Sequelize</li>
                    <li>MongoDB/ Mongoose</li>
                    <li>GraphQL/ Apollo Server</li>
                </ul>
            </div>
        </div>
        <button className="btn btn-lg">
            <a href={resume} download="PamelaResume"><i class="bi bi-download"></i>  Download Resume</a>
        </button>
        <div className="row" style={{padding: 60}}>
            <img src={working} id="working" className="mx-auto" alt="Hard at work!" />
        </div>

    </section>
)

export default Resume;