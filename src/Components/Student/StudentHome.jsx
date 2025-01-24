import Navbar from "../Navbar";
import MentorCard from "./MentorCard";
import "../../assets/style/StudentHome.css";

const StudentHome=()=>
{
    return(
        <>
           <Navbar/>
           <div className="container-fluid div-color">
                <div className="row mx-4">
                    <MentorCard/>
                </div>
           </div>
        </>
    )
}

export default StudentHome;