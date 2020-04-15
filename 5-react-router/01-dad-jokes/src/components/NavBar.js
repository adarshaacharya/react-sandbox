import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

const NavBar = () => {
    const navStyle={
        color : 'white'
    }
  return (
    <div>
      <nav>
        <h3>Logo</h3>

        <ul className="nav-links">
          <Link to="/" style={navStyle}>
            <li>Home</li>
          </Link>

          <Link to="/about" style={navStyle}>
            <li>About</li>
          </Link>

          <Link to="/jokes" style={navStyle}>
            <li>Jokes</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
