import React from 'react';

//import styling
import "../index.css";

function Navbar(props) {

    return (
      <div className="navbar">
        <ul className="nav-list">
        	<li className="nav-item"><a href="/">Sean Cody</a></li>
        	<li className="nav-item"><a href="/projects">Projects</a></li>
        	<li className="nav-item"><a href="/about">About</a></li>
        </ul>

      </div>
    );
}

export default Navbar;


