import React from "react";
import pfp from "../../assets/images/picMe.jpg"

const About = () => (
    <section>
        <div className="row">
            <img src={pfp} id="pfp" className="mx-auto" alt="Pamela Cleveland" />
        </div>

        <div className="about">
            <h1>Hi, I'm Pamela</h1>
            <p>
                I am a User-Focused Web Developer with advanced skills in HTML, CSS and JavaScript, leveraging a background in psychology and customer service to provide unique perspectives on how end-users interact with websites and software platforms. Eearned a certificate in Full Stack Web Development from the UNC-Charlotte Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, organization, and building projects from ideation to execution. I am a hard-working, detail-oriented Software Developer passionate about learning, researching and writing code.
            </p>
        </div>
    </section>
)

export default About;