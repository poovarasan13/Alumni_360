import Logo from "../Logo";
import Img from "../../assets/images/StudentLogin.png";
import SButton from "./SButton";
import  "../../assets/style/StudentLogin.css";
import Profile from "../../assets/images/Profile.png"
import Password from "../../assets/images/Password.png"
import { useState } from "react";

const StudentLogin=()=>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
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
              <div className="container">
        <div className="row">
          <div className="col-7"><img alt="Img" src={Img} className="image1"/></div>
          <div className="col-5">
            <div className="container-fluid mt-3">
             <div className="row justify-content-cente12">
                    <div className="col-12 ">
                          <div className="card pb-5 rounded-4 form-design">
                            <div className="card-body ">
                              <div className="row ms-3 pt-3">
                                         <div className="text fw-bold h4">Hello!</div>
                              </div>
                              <div className="row  ms-3">
                                      <div className="text fw-bold h4">Welcome Back!!</div>
                              </div>
                             
                            <div className="row mt-2">
                                <div className="col mx-4">
                                    <div className="input-group">
                                    <div class="input-group-text">
                                        <img src={Profile} alt="username" className="profile" />
                                    </div>
                        <input type="text" class="form-control"  placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>

                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col mx-4">
                                    <div className="input-group">
                                    <div class="input-group-text">
                                        <img src={Password} alt="password" className="password" />
                                    </div>
                                <input type="password" class="form-control"  placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

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
                            
                              
                              <SButton name="Login" color="color2" path="/studenthome"/>
                              
                              

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
export default StudentLogin;