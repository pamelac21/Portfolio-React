import React from "react";
import budget from "../../assets/images/budget-tracker.png"
//import weather from "../../assets/images/weather-dashboard.png"
import eCommerce from "../../assets/images/ecom.jpg"
//import noteTaker from "../../assets/images/note-taker.png"
import healthApp from "../../assets/images/medicine-healthcare.gif"
import social from "../../assets/images/social.jpg"
//import newToTown from "../../assets/images/new-to-town.png"
import techblog from "../../assets/images/techblog.jpg"
import books from "../../assets/images/bookshelf.png"
//import ??? from "../../assets/images/???"


const Work = () => (
    <section>
        <div className="work-title">
            <h1>Projects</h1>
        </div>
        <div className="projects row justify-content-center">

            {/* Tech Blog */}
            <div className="project-items col-xl-4 col-sm-8">
                <img src={techblog} alt="blogging" />
                <div className="image-text">
                    <h4>Tech Blog</h4>
                    <p>SQL - Sole Author</p>
                    <a href="https://github.com/pamelac21/Tech-Blog" target="_blank"
                        rel="noopener noreferrer"><i class="bi bi-code"></i> Source Code</a>
                    <a href="https://secure-sands-16724.herokuapp.com/" target="_blank"
                        rel="noopener noreferrer"><i class="bi bi-app"></i> Live Application</a>
                </div>
            </div>
            {/* E-Commerce Back-End */}
            <div className="project-items col-xl-4 col-sm-8">
                <img src={eCommerce} alt="computer"/>
                <div className="image-text">
                    <h4>E-Commerce Back-End</h4>
                    <p>SQL - Refactor</p>
                    <a href="https://github.com/pamelac21/E-commerce" target="_blank"
                        rel="noopener noreferrer"><i class="bi bi-code"></i> Source Code</a>
                </div>
            </div>
            {/* PROJECT 3 */}
            <div className="project-items col-xl-4 col-sm-8">
                <img src={healthApp} alt="note-taker"/>
                <div className="image-text">
                    <h4>Health Care App</h4>
                    <p>MERN - Back-End/Authentication</p>
                    <a href="https://github.com/crhodes111/Healthcare-Project-3" target="_blank"
                        rel="noopener noreferrer"><i class="bi bi-code"></i> Source Code</a>
                    <a href="https://quiet-dawn-07208.herokuapp.com/" target="_blank"
                        rel="noopener noreferrer"><i class="bi bi-app"></i> Live Application</a>
                </div>
            </div>
            {/* Social Network API */}
            <div className="project-items col-xl-4 col-sm-8">
                <img src={social} alt="social-network"/>
                <div className="image-text">
                    <h4>Social Network API</h4>
                    <p>MongoDB - Sole Author</p>
                    <a href="https://github.com/pamelac21/Social-Network-API" target="_blank"
                        rel="noopener noreferrer"><i class="bi bi-code"></i> Source Code</a>
                </div>
            </div>
            {/* Book Search Engine */}
            <div className="project-items col-xl-4 col-sm-8">
                <img src={books} alt="some books"/>
                <div className="image-text">
                    <h4>Book Search Engine</h4>
                    <p>MERN - Refactor</p>
                    <a href="https://github.com/pamelac21/Book-Search-Engine" target="_blank"
                        rel="noopener noreferrer"><i class="bi bi-code"></i> Source Code</a>
                    <a href="https://limitless-sea-64444.herokuapp.com/" target="_blank"
                        rel="noopener noreferrer"><i class="bi bi-app"></i> Live Application</a>
                </div>
            </div>
            {/* Budget Tracker */}
            <div className="project-items col-xl-4 col-sm-8">
                <img src={budget} alt="budget-tracker"/>
                <div className="image-text">
                    <h4>Budget Tracker</h4>
                    <p>NoSQL - Refactor</p>
                    <a href="https://github.com/pamelac21/Budget-Tracker" target="_blank"
                        rel="noopener noreferrer"><i class="bi bi-code"></i> Source Code</a>
                    <a href="https://polar-hollows-87169.herokuapp.com/" target="_blank"
                        rel="noopener noreferrer"><i class="bi bi-app"></i> Live Application</a>
                </div>
            </div>
        </div>
    </section>
)


export default Work;

//
//             {/* Budget Tracker */}
//             <div className="project-items col-xl-4 col-sm-8">
//                 <img src={budget} alt="budget-tracker"/>
//                 <div className="image-text">
//                     <h4>Budget Tracker</h4>
//                     <p>PWA</p>
//                     <a href="https://github.com/pamelac21/Budget-Tracker" target="_blank"
//                         rel="noopener noreferrer"><i class="bi bi-code"></i> Source Code</a>
//                     <a href="https://polar-hollows-87169.herokuapp.com/" target="_blank"
//                         rel="noopener noreferrer"><i class="bi bi-app"></i> Live Application</a>
//                 </div>
//             </div>

//             {/* Weather Dashboard */}
//             <div className="project-items col-xl-4 col-sm-8">
//                 <img src={weather} alt="weather-dashboard" />
//                 <div className="image-text">
//                     <h4>Weather Dashboard</h4>
//                     <p>Full-Stack Application</p>
//                     <a href="https://github.com/pamelac21/Weather-Dashboard" target="_blank"
//                         rel="noopener noreferrer"><i class="bi bi-code"></i> Source Code</a>
//                     <a href="https://pamelac21.github.io/Weather-Dashboard/" target="_blank"
//                         rel="noopener noreferrer"><i class="bi bi-app"></i> Live Application</a>
//                 </div>
//             </div>

//             {/* New To Town */}
//             <div className="project-items col-xl-4 col-sm-8">
//                 <img src={newToTown} alt="new-to-town"/>
//                 <div className="image-text">
//                     <h4>New To Town</h4>
//                     <p>Server Side APIs</p>
//                     <a href="https://github.com/pamelac21/Project-1-APIs" target="_blank"
//                         rel="noopener noreferrer"><i class="bi bi-code"></i> Source Code</a>
//                     <a href="https://shagens.github.io/New-To-Town/" target="_blank"
//                         rel="noopener noreferrer"><i class="bi bi-app"></i> Live Application</a>
//                 </div>
//             </div>
            // {/* Social Network API */}
            // <div className="project-items col-xl-4 col-sm-8">
            //     <img src={social} alt="social-network"/>
            //     <div className="image-text">
            //         <h4>Social Network API</h4>
            //         <p>MongoDB</p>
            //         <a href="https://github.com/pamelac21/Social-Network-API" target="_blank"
            //             rel="noopener noreferrer"><i class="bi bi-code"></i> Source Code</a>
            //     </div>
            // </div>
