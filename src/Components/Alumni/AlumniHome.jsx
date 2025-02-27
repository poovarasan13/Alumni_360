
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import AlumniImage from "../../assets/images/Person.png";

import { Link,Routes,Route } from "react-router-dom";
import AlumniPost from "./AlumniPost";
const AlumniHome=()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="row mt-4 ms-4">
                <div className="col-2 h5">Hello I'm</div>
                <div className="col"></div>
                <div className="col-2"> 
                    <div className="btn btn-sm fs-5"> Back</div>
                </div>
            </div>
            <div className="row ms-5">
                <div className="col h4 ms-4">Web Application Develpor</div>
            </div>
            <div className="row mt-4  ms-5 ps-4 ">
                
                <div className="col h5 fw-normal d-flex align-items-center ">
                <MdOutlineMailOutline />  <span className="ms-2"> alumnimail@gmail.com</span>
                </div>
            </div>
            <div className="row bg2 position-relative">
    <div className="col-12">
        <div className="row justify-content-center">
            <div className="col-2 position-absolute top-0 start-50 translate-middle">
                <img src={AlumniImage} alt="alumniphoto" style={{ width: "180px", height: "150px", position: "absolute", top: "-50px" }} />
            </div>
        </div>
    </div>
    <div className="col-12 mt-5 pt-5">
        <div className="row justify-content-center">
            <div className="col-2 text-white h2 fw-bold">Poovarasan S</div>
        </div>
    </div>
    <div className="col-12">
        <div className="row justify-content-center">
            <div className="col-4 ms-5 ps-3 text-white h4">Currently Working at SP Technologies</div>
        </div>
    </div>
    <div className="col-12">
        <div className="row justify-content-center">
            <div className="col-2 text-white fw-normal">Coimbatore Tamilnadu, India</div>
        </div>
    </div>
    <div className="col-12 mb-3">
        <div className="row justify-content-center">
            <div className="col-3">
                <div className="btn bg1">Edit profile Section</div>
                <div className="btn bg1 ms-3"><IoIosAddCircle /> Edit</div>
            </div>
        </div>
    </div>
</div>
         
         <div className="row">
            <div className="col-12 ">
                 <div className="row justify-content-center mt-3">
                    <div className="col-3">
                        <Link className="btn btn1 px-5 rounded-0 border  " to="/alumnipage/alumnipost">Post</Link>
                    </div>
                    <div className="col-3">
                        <Link className="btn btn1 px-5 rounded-0 border  " to="/alumnipage/alumniwebinar">Post</Link>
                    </div>
                    <div className="col-3">
                        <Link className="btn btn1 px-5 rounded-0 border  " to="/alumnipage/alumniinternship">Post</Link>
                    </div>
                 </div>

            </div>
         </div>
         <Routes>
            <Route path="/" element={<AlumniPost/>}/>
             <Route path="/alumnipost" element={<AlumniPost/>}/>
             <Route path="/alumniwebinar" element={<AlumniPost/>}/>
             <Route path="/alumniinternship" element={<AlumniPost/>}/>
             </Routes>
        </div>
        </>
    )
}

export default AlumniHome;