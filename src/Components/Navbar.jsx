import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/style/Navbar.css";
import HomeButton2 from "./HomeButton2";
import Logo from "./Logo";
import UserContext from "../Context/Student";

function Navbar() {
  const navigate = useNavigate();
  const {
    name,
    setName,
    setStudent,
    setSkipSave
  } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("studentData");

    setSkipSave(true); 

    setName("");
    setStudent(false);
    
    navigate("/home");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-color fixed-top custom-navbar">
      <div className="container-fluid">
        <div className="navbar-brand text">
          <Logo />
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
              <Link to="/studenthome" className="nav-link fw-medium fs-7 fw-bold">
                Home
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/forum" className="nav-link fw-medium fs-7 fw-bold">
                Forum
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/volunteers" className="nav-link fw-medium fs-7 fw-bold">
                Volunteers
              </Link>
            </li>
            <li className="nav-item mx-4">
              <span onClick={handleLogout} className="nav-link fw-medium fs-7 fw-bold">
                Logout
              </span>
            </li>
          </ul>

          {name.length !== 0 &&
            <div className="d-flex">
              {name}
            </div>
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
