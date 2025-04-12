import ForumSideBar from "./ForumSideBar";
import Navbar from "./Navbar";
import { useContext } from "react";
import {Routes,Route} from "react-router-dom";
import ForumHome from "../Components/Forum/ForumHome";
import OtherForum from "./Forum/OtherForum";
import PostDetails from "./Forum/PostDetails";
import AlumniNavbar from "./Alumni/AlumniNavbar";
import UserContext from "../Context/Student";
import AlumniContext from "../Context/Alumni";
const Forum=()=>{
    const {alumniData}=useContext(AlumniContext);
    console.log(alumniData.alumni);
    const {student}=useContext(UserContext);
    return(
        <>
       {alumniData.alumni===true && <AlumniNavbar/>}
       {student===true && <Navbar/>}
            <div className="container-fluid pt-5">
                <div className="row text-center pt-2 ">
                    <div className="col-2 bg-light">
                        <ForumSideBar/>
                    </div>
                    <div className="col">
                    <Routes>
                        <Route path="/" element={<ForumHome/>}/>
                        <Route path="/other" element={<OtherForum/>}/>
                        
                        <Route path="/forumprog" element={<ForumHome/>}/>
                        <Route path="/forumhome" element={<ForumHome/>}/>
                        <Route path="/forumhome" element={<ForumHome/>}/>
                        <Route path="/forumhome" element={<ForumHome/>}/>
                        <Route path="/forumhome" element={<ForumHome/>}/>
                        <Route path="/forumhome" element={<ForumHome/>}/>
                        <Route path="/forumhome" element={<ForumHome/>}/>



                        <Route path="/:id" element={<PostDetails/>}/>
                    </Routes>
                    </div>
                </div>
            </div>
        </>
    )   
}

export default Forum;