import React from "react";

function Nav(props) {
    const navTabs = ['About', 'Projects', 'Resume']; //REMOVED (, 'Contact')
    return (
        <ul className="nav justify-content-center" id="nav">
            {navTabs.map(tab => (
                <li className={props.currentPage === tab ? "nav-item navActive" : "nav-item"}
                    key={tab}>
                    <span
                        className="nav-link"
                        href={'#' + tab.toLowerCase()}
                        onClick={() => props.handlePageChange(tab)}
                    >
                        {tab}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default Nav;