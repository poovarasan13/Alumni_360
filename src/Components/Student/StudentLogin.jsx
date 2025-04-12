import Logo from "../Logo";
import Img from "../../assets/images/StudentLogin.png";
import SButton from "./SButton";
import  "../../assets/style/StudentLogin.css";
import Profile from "../../assets/images/Profile.png"
import Password from "../../assets/images/Password.png"
import { useState ,useContext} from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context/Student";
// import dotenv from 'dotenv';
const StudentLogin=()=>{
    // dotenv.config();
    const url = import.meta.env.VITE_HOST_URL;
    // console.log(import.meta.env);
    console.log("url"+ url);
    const {name,setName,mobile,setMobile,setRollno}=useContext(UserContext);
    const[roll,setRoll]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
     const handleLogin = async (e)=>{
        e.preventDefault();
        console.log("enter login");
        try{
          const response= await fetch(`${url}/login`,{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({roll,password})
          })
            const data= await response.json();
             console.log(data);
             if(data.success)
             {
             console.log("Login Success");
             localStorage.setItem('token', data.token);
             localStorage.setItem('role', data.role);
             setName(data.student.name);
             setMobile(data.student.mobile);
             setRollno(data.student.rollno);
             setStudent(true);
             navigate('/studenthome');
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
                                        <img src={Profile} alt="rollno" className="profile" />
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
                            
                              
                              <SButton className="btn" name="Login" type='submit' color="color2" />
                              
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
export default StudentLogin;