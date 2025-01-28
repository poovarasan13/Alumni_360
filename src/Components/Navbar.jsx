import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/Navbar.css";
import HomeButton2 from "./HomeButton2";
import Logo from "./Logo"
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-color fixed-top custom-navbar">
      <div className="container-fluid">
        <div className="navbar-brand text">
                       <Logo/>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-4">
              <Link to="/home" className="nav-link fw-medium fs-7">
                Home
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/mentor" className="nav-link fw-medium fs-7">
                Mentors
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/forum" className="nav-link fw-medium fs-7">
                Forum
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/volunteers" className="nav-link fw-medium fs-7">
                Volunteers
              </Link>
            </li>
          </ul>
          <div className="d-flex">
              <HomeButton2 name="Login"/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
