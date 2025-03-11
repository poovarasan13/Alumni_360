import Logo from "../Logo";
import Img from "../../assets/images/StudentMain.png";
import SButton from "./SButton";
import  "../../assets/style/StudentMain.css";
import { useNavigate } from "react-router-dom";
const StudentMain=()=>{
  const navigate=useNavigate();
  const handleLogin=()=>{
    navigate('/studentlogin');
  }
    return(
        <>
       
      
              <div className=" mt-3 ms-5">
                   <Logo/>                                                             
              </div>
              <div className="container pt-5">
        <div className="row">
          <div className="col-7"><img alt="Img" src={Img} className="image"/></div>
          <div className="col-5"><div className="container-fluid mt-3">
             <div className="row justify-content-cente12">
                    <div className="col-12 ">
                          <div className="card pb-5 rounded-4 form-design">
                            <div className="card-body ">
                              <div className="row ms-3 pt-3">
                                         <div className="text fw-bold h3">Hello!</div>
                              </div>
                              <div className="row me-4 pe-3 pt-3 ms-3">
                                      <div className="text h5 fw-light">Create your account and if you have one login</div>
                              </div>
                              <div className="row justify-content-center pb-3">
                                <div className="col-4 ">
                                  <div className="text">Get Started?</div></div>
                              </div>
                              
                              <SButton type='submit' name="Login" color="color2" onClick={handleLogin}/>
                              {/* <SButton name="Sign up" color="color1"/>  */}
                              

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
export  default StudentMain;