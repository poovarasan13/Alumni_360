import React, { useContext } from 'react'
import { useState } from 'react';
import Img from "../../assets/images/StudentLogin.png";
import SButton from '../Student/SButton';
import Logo from "../Logo";
import Profile from "../../assets/images/Profile.png"
import Password from "../../assets/images/Password.png"
import { useNavigate } from 'react-router-dom';
import AlumniContext from '../../Context/Alumni';
const AlumniLogin = () => {
  const url = import.meta.env.VITE_HOST_URL;
  // console.log(import.meta.env);
  // console.log("url"+ url);

  const {setAlumniData,}=useContext(AlumniContext)
    const[roll,setRoll]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const[usernot,setUsernot]=useState(false);
    const[passworderror,setPassworderror]=useState(false);
    const handleLogin = async (e)=>{
      e.preventDefault();
      console.log("enter login");
      try{
        const response= await fetch(`${url}/alumni`,{
          method:"POST",
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({roll,password})
        })
          const data= await response.json();
           console.log(data);
           if (!data.success && data.user === true && data.password==false) {
            setUsernot(true);
        } else if (!data.success  &&data.user===false && data.password===true)  { 
            setPassworderror(true);
        }
        
           if(data.success)
           {
            localStorage.setItem("token", data.token);
           console.log("Login Success");
          //  setName(data.alumni.name);
          //  setMobile(data.student.mobile);
          //  setRollno(data.student.rollno);
          // console.log(data.details)
          // console.log(data.alumni);
          // if (data.details) {
            setAlumniData({
              Name: data.details?.Name ?? data.alumni.name,
              rollno: data.details?.rollno ?? data.alumni.rollno,
              Gmail: data.details?.Gmail || "",
              Linkedin: data.details?.Linkedin || "",
              ProfilePhoto: data.details?.ProfilePhoto || "",
              WorkLocation: data.details?.WorkLocation || "",
              FieldOfWorking: data.details?.FieldofWorking || "",
              CompanyName: data.details?.CompanyName || "",
              alumni:true
            });
      // }
           navigate('/alumnipage');
           }
           if(data.alumni===true)
           {
            alert(data.message);
           }
      }
      catch(err)
      {
          console.log("Error in Login",err.message);
      }
   }
    return(
        <>
         
              <div className=" mt-3 ms-5">
                   <Logo/>
              </div>
              {/* <div className="row">
                <div className="col">
                          {username}
                </div>
                <div className="col">
                    {password}
                </div>
              </div> */}
              <div className="container pt-4">
        <div className="row">
          <div className="col-7"><img alt="Img" src={Img} className="image1"/></div>
          <div className="col-5">
            <div className="container-fluid mt-3">
             <div className="row justify-content-cente12">
                    <div className="col-12 ">
                          <div className="card pb-5 rounded-4 form-design">
                            <div className="card-body ">
                            <form onSubmit={handleLogin}>
                              <div className="row ms-3 pt-3">
                                         <div className="text fw-bold h4">Hello!</div>
                              </div>
                              <div className="row  ms-3">
                                      <div className="text fw-bold h4">Welcome Back!!</div>
                              </div>
                             
                            <div className="row mt-2">
                                <div className="col mx-4">
                                    <div className="input-group">
                                    <div className="input-group-text">
                                        <img src={Profile} alt="username" className="profile" />
                                    </div>
                        <input type="text" className="form-control"  placeholder="Rollno" value={roll} onChange={(e)=>setRoll(e.target.value)}/>

                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col mx-4">
                                    <div className="input-group">
                                    <div className="input-group-text">
                                        <img src={Password} alt="password" className="password" />
                                    </div>
                                <input type="password" className="form-control"  placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                                    </div>
                                </div>
                            </div>
                            {password.length!=0 && <div className="row mt-2">
                                <div className="col ms-4">
                                <div className="text">
                                      Password : <u>{password}</u>
                                </div>
                                </div>
                            </div>}
                              {usernot &&
                              <div className="text-danger text-center">
                                User Not Found</div>}
                                {passworderror &&
                              <div className="text-danger text-center">
                                Password is incorrect</div>}
                              
                              <SButton name="Login" type='submit' color="color2"/>
                              
                              </form>

                            </div>
                          </div>
                    </div>
             </div>
            </div></div>

        </div>

                </div>
                
        </>
  )
}

export default AlumniLogin
