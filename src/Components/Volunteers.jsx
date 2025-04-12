import { useContext } from "react";
import Navbar from "./Navbar";
import VolunteerPage from "./Volunteers/VolunteerPage";
import AlumniContext from "../Context/Alumni";
import UserContext from "../Context/Student";
import AlumniNavbar from "./Alumni/AlumniNavbar";


const Volunteers=()=>{
    const {alumniData}=useContext(AlumniContext);
    const{student}=useContext(UserContext);
    return(
       
        <>
          {alumniData.alumni===true && <AlumniNavbar/>}
          {student===true && <Navbar/>}
         <VolunteerPage/>
        </>
    )
}
export default Volunteers;