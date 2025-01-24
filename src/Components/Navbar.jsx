import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-color border border-light-subtle">
      <div className="container-fluid">
        <div className="navbar-brand text">Alumni</div>

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
            <li className="nav-item mx-4 ">
              <Link to="/home" className="nav-link fw-bold fs-5">Home</Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/mentor"  className="nav-link fw-bold fs-5">Mentors</Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/forum" className="nav-link fw-bold fs-5">Forum</Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/volunteers" className="nav-link fw-bold fs-5">Volunteers</Link>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-dark" type="button">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
