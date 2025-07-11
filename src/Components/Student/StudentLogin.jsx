import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Logo from "../Logo";
import Img from "../../assets/images/StudentLogin.png";
import SButton from "./SButton";
import "../../assets/style/StudentLogin.css";
import Profile from "../../assets/images/Profile.png";
import Password from "../../assets/images/Password.png";
import UserContext from "../../Context/Student";

const StudentLogin = () => {
  const url = import.meta.env.VITE_HOST_URL;
  const { setName, setMobile, setRollno, setStudent } = useContext(UserContext);

  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${url}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roll, password }),
      });

      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data.token);
      if (data.success) {
       
        setName(data.student.name);
        setMobile(data.student.mobile);
        setRollno(data.student.rollno);
        setStudent(true);

       
        const studentData = {
          name: data.student.name,
          mobile: data.student.mobile,
          rollno: data.student.rollno,
          student: true,
        };
        localStorage.setItem('studentData', JSON.stringify(studentData));

        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Login Successful',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });

        navigate("/studenthome");
      } else if (data.alumni === true) {
        Swal.fire({
          icon: 'warning',
          title: 'Access Denied',
          text: data.message,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: data.message || 'Invalid credentials.',
        });
      }
    } catch (err) {
      console.log("Error in Login", err.message);
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <>
      <div className="mt-3 ms-5">
        <Logo />
      </div>
      <div className="container pt-4">
        <div className="row">
          <div className="col-7">
            <img alt="Img" src={Img} className="image1" />
          </div>
          <div className="col-5">
            <div className="container-fluid mt-3">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="card pb-5 rounded-4 form-design">
                    <div className="card-body">
                      <form onSubmit={handleLogin}>
                        <div className="row ms-3 pt-3">
                          <div className="text fw-bold h4">Hello!</div>
                        </div>
                        <div className="row ms-3">
                          <div className="text fw-bold h4">Welcome Back!!</div>
                        </div>

                        <div className="row mt-2">
                          <div className="col mx-4">
                            <div className="input-group">
                              <div className="input-group-text">
                                <img src={Profile} alt="rollno" className="profile" />
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Rollno"
                                value={roll}
                                onChange={(e) => setRoll(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row mt-4">
                          <div className="col mx-4">
                            <div className="input-group">
                              <div className="input-group-text">
                                <img src={Password} alt="password" className="password" />
                              </div>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        {/* {password.length > 0 && (
                          <div className="row mt-2">
                            <div className="col ms-4">
                              <div className="text">
                                Password: <u>{password}</u>
                              </div>
                            </div>
                          </div>
                        )} */}

                        <SButton className="btn" name="Login" type="submit" color="color2" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentLogin;
