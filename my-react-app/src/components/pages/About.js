import React from "react";
import pfp from "../../assets/images/picMe.jpg"

const About = () => (
    <section>
        <div className="row">
            <img src={pfp} id="pfp" className="mx-auto" alt="Shane Purgason" />
        </div>

        <div className="about">
            <h1>Hi, I'm Pamela</h1>
            <p>
                My name is Pamela Cleveland. I am a MERN Stack web developer from North Carolina. I enjoy creating interactive applications that everyone can use and enjoy. I am a hard-working, detail-oriented Software Developer passionate about learning, researching and writing code.
            </p>
        </div>
    </section>
)

export default About;