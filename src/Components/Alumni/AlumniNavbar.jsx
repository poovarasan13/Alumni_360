import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/style/Navbar.css";

import Logo from "../Logo";
import AlumniContext from "../../Context/Alumni";

function AlumniNavbar() {
  const { alumniData, setAlumniData, setSkipSave } = useContext(AlumniContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("alumniData");

    setSkipSave(true); 

    setAlumniData({
      Name: '',
      FieldofWorking: '',
      WorkLocation: '',
      ProfilePhoto: '',
      Gmail: '',
      Linkedin: '',
      rollno: '',
      CompanyName: '',
      alumni: false
    });

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
              <Link to="/alumnipage" className="nav-link fw-medium fs-7 fw-bold">
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
              <button
                className="nav-link fw-medium fs-7 fw-bold bg-transparent border-0"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
          <div className="d-flex">
            {alumniData.name}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AlumniNavbar;
