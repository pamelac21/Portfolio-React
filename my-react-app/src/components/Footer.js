import React from "react";

function Footer() {
    return (
        <footer className="container">
            <div className="socials">
                <h3>Contact</h3>
                <a href="https://github.com/pamelac21" target="_blank" rel="noopener noreferrer">
                    <i className=" bi bi-github" style={{ fontSize: 1.75 + 'rem' }}></i>
                </a>
                <a href="mailto: pamelac021@gmail.com">
                    <i className="bi bi-envelope-fill" style={{ fontSize: 1.75 + 'rem' }}></i>
                </a>
                <a href="www.linkedin.com/in/pamela-cleveland-8494671b7">
                    <i className="bi bi-linkedin" style={{ fontSize: 1.75 + 'rem' }}></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer;