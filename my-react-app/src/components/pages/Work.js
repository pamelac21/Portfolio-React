import React from "react";
import budget from "../../assets/images/budget-tracker.png"
import weather from "../../assets/images/weather-tracker.png"
import eCommerce from "../../assets/images/ecom.jpg"
import noteTaker from "../../assets/images/note-taker.png"
import social from "../../assets/images/social.jpg"
import newToTown from "../../assets/images/new-to-town.png"

const Work = () => (
    <section>
        <div className="work-title">
            <h1>Projects</h1>
        </div>
        <div className="projects row justify-content-center">
            {/* Budget Tracker */}
            <div className="project-items col-xl-4 col-sm-8">
                <img src={budget} alt="budget-tracker"/>
                <div className="image-text">
                    <h4>Budget Tracker</h4>
                    <p>PWA</p>
                    <a href="https://github.com/pamelac21/Budget-Tracker" target="_blank"
                        rel="noopener noreferrer">Source Code</a>
                    <a href="https://polar-hollows-87169.herokuapp.com/" target="_blank"
                        rel="noopener noreferrer">Live Application</a>
                </div>
            </div>
            {/* Weather Dashboard */}
            <div className="project-items col-xl-4 col-sm-8">
                <img src={weather} alt="weather-dashboard" />
                <div className="image-text">
                    <h4>Weather Dashboard</h4>
                    <p>Full-Stack Application</p>
                    <a href="https://github.com/pamelac21/Weather-Dashboard" target="_blank"
                        rel="noopener noreferrer">Source Code</a>
                    <a href="https://pamelac21.github.io/Weather-Dashboard/" target="_blank"
                        rel="noopener noreferrer">Live Application</a>
                </div>
            </div>
            {/* E-Commerce Back-End */}
            <div className="project-items col-xl-4 col-sm-8">
                <img src={eCommerce} alt="computer"/>
                <div className="image-text">
                    <h4>E-Commerce Back-End</h4>
                    <p>ORM</p>
                    <a href="https://github.com/pamelac21/E-commerce" target="_blank"
                        rel="noopener noreferrer">Source Code</a>
                </div>
            </div>
            {/* Note Taker */}
            <div className="project-items col-xl-4 col-sm-8">
                <img src={noteTaker} alt="note-taker"/>
                <div className="image-text">
                    <h4>Note Taker</h4>
                    <p>Express.js</p>
                    <a href="https://github.com/pamelac21/Note-Taker" target="_blank"
                        rel="noopener noreferrer">Source Code</a>
                    <a href="https://salty-chamber-17307.herokuapp.com/" target="_blank"
                        rel="noopener noreferrer">Live Application</a>
                </div>
            </div>
            {/* Social Network API */}
            <div className="project-items col-xl-4 col-sm-8">
                <img src={social} alt="social-network"/>
                <div className="image-text">
                    <h4>Social Network API</h4>
                    <p>MongoDB</p>
                    <a href="https://github.com/pamelac21/Social-Network-API" target="_blank"
                        rel="noopener noreferrer">Source Code</a>
                </div>
            </div>
            {/* New To Town */}
            <div className="project-items col-xl-4 col-sm-8">
                <img src={newToTown} alt="new-to-town"/>
                <div className="image-text">
                    <h4>New To Town</h4>
                    <p>Server Side APIs</p>
                    <a href="https://github.com/pamelac21/Project-1-APIs" target="_blank"
                        rel="noopener noreferrer">Source Code</a>
                    <a href="https://shagens.github.io/New-To-Town/" target="_blank"
                        rel="noopener noreferrer">Live Application</a>
                </div>
            </div>
        </div>
    </section>
)


export default Work;