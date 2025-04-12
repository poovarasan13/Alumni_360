import Navbar from "./Navbar";
import Homimg from "../assets/images/image.png";
import "../assets/style/Home.css";
import HomeButton from "./HomeButton";
import Alumni from "../assets/images/alumni.png";
import Student from "../assets/images/student.png";
import HomeButton2 from "./HomeButton2";
const Home=()=>{
      return(
        <>
             {/* <Navbar/> */}
             <div className="container-fluid mt-4 pt-5">
                <div className="row justify-content-center ms-5 pt-4">
                   <div className="col-6 ">
                      <div className="img-fluid homimg ">
                        <img src={Homimg} alt="Homimg" className="homimg"/>
                      </div>
                   </div>
                   <div className="col-5">
                    <div className="row">
                         <div className="text  display-3 fw-semibold  no-margin">Providing Best Guidence For 
                            <span className="text-warning"> Bright</span> Future <span className="">..</span>
                        </div>
                    </div>

                    <div className="row my-2 mt-4">
                     <div className="text text-secondary h4 fw-normal ">This platform aims to enhance alumni engagement, support donations, 
                        and provide valuable networking and career services</div>
                    </div>

                    <div className="row mt-4">
                     <div className="col-4 mx-3">

                        <HomeButton name="Alumni" value="alumni" image={Alumni} path="/alumnilogin" />
                     </div>
                     <div className="col-4 mx-3">
                     <HomeButton name="Student" value="student" image={Student} path="/studentmain"/>   
                     </div>
                    </div>
                    <div className="row mt-4">
                     {/* <div className="col-7 mx-auto">
                        <HomeButton2 name="GET STARTED"/>
                     </div> */}
                    </div>
                   </div>
                </div>
             </div>
        </>
      )
}
export default Home;