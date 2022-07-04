import React from "react";
import resume from "../../assets/resume/Resume.pdf";
import working from "../../assets/images/--about.aee0f771.png"
import badge from "../../assets/images/coding-certificate SM.png"

//import coding from "../../assets/images/development.png"
//<img src={coding} alt="skills"/>

const Resume = () => (
    <section className="container" id="resume">

        <h1>Skills</h1>

        <div className="skills-wrapper">
            <div className="skills">
                <ul>
                <li><a href="https://www.credly.com/badges/d484a158-8c89-42c4-ae0b-15d3e196207f/public_url" target="_blank" rel="noopener noreferrer"><img src={badge} alt="UNCC coding badge" /></a>
                        </li>
                    <br />
                    <li>Git</li>
                    <li>MERN</li>
                    <li>MySQL</li>
                    <li>Sequelize ORM/ Mongoose ODM</li>
                    <li>React</li>
                    <li>NoSQL (MongoDB)</li>
                    <li>GraphQL/ Apollo Server</li>
                    <li>Node.js</li>
                    <li>Progressive Web Applications</li>
                    <li>Object-oriented Programming</li>
                    <li>Express.js</li>
                    <li>Data Structures</li>
                    <li>Database Management</li>
                    <li>Client-Side Storage</li>
                    <li>REST APIs</li>
                    <li>Responsive Design</li>
                    <li>Agile</li>  
                    <li>HTML/ CSS/ JavaScript</li>

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