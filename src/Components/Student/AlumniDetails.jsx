import Navbar from "../Navbar";
import alumniDetails from "../../assets/images/alumniDetails.png"
import "../../assets/style/AlumniDetails.css";
import alumnicourse from "../../assets/images/AlumniCourse.png";
import { Route, Routes ,Link} from "react-router-dom";

import Courses from "./Courses";
import Webinar from "./Webinar";
import Intership from "./Intership";


const AlumniDetails=()=>{
    return(
        <>
        <Navbar/>
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-7 mx-5 px-3">
                    <div className="text h2">Education is the passport to the future, for tomorrow
                        belongs to those who prepare for it today.
                    </div>

                </div>
                <div className="col-2 ">
                            <img src={alumniDetails} alt="AlumniDetails" className="alumni"></img>
                </div>
            </div>

            <div className="row mt-4 pb-5 ">
                         <div className="col-2">
                            <Link className="btn btn-sm px-4 py-1 fs-6 rounded-4 btn-colorr" to="/studenthome/alumnnicourse">
                                   Courses
                            </Link>
                         </div>
                         <div className="col-2">
                            <Link className="btn btn-sm px-4 py-1 fs-6 rounded-4  btn-colorr" to="/studenthome/alumniwebinar">
                                   Webinars
                            </Link>
                         </div>
                         <div className="col-2">
                            <Link className="btn btn-sm px-4 py-1 fs-6 rounded-4   btn-colorr " to="/studenthome/alumniintership">
                                   Interships
                            </Link>
                         </div>
            </div>

            <div className="row">
                  <Routes>
                  <Route path="/" element={<Courses/>}/>
                
                <Route path="/alumniwebinar" element={<Webinar/>}/>
                <Route path="/alumnnicourse" element={<Courses/>}/>
                <Route path="/alumniintership" element={<Intership/>}/>
                </Routes>
                </div>
             </div>
        </>
    )
}

export default AlumniDetails;