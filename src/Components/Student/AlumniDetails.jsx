import { useEffect, useState, useContext } from "react";
import { useLocation, Routes, Route, Link } from "react-router-dom";
import Navbar from "../Navbar";
import alumniDetails from "../../assets/images/alumniDetails.png";
import "../../assets/style/AlumniDetails.css";
import Courses from "./Courses";
import Webinar from "./Webinar";
import Internship from "./Intership";
import { MentorContext } from "../../Context/Alumni/MentorProvider";

const AlumniDetails = () => {
    const location = useLocation();
    const { mentor, setMentor } = useContext(MentorContext);

    const [webinars, setWebinars] = useState([]);
    const [posts, setPosts] = useState([]);
    const [internships, setInternships] = useState([]);

  
    useEffect(() => {
        const incomingMentor = location.state?.mentor;
        if (incomingMentor) {
            setMentor(incomingMentor);
    
            const token = localStorage.getItem("token");
            const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            };
    
            fetch(`http://localhost:9000/webinars/student/list/${incomingMentor.rollno}`, { headers })
                .then(response => response.json())
                .then(data => setWebinars(data))
                .catch(error => console.error("Error fetching webinars:", error));
    
            fetch(`http://localhost:9000/posts/student/list/${incomingMentor.rollno}`, { headers })
                .then(response => response.json())
                .then(data => setPosts(data))
                .catch(error => console.error("Error fetching posts:", error));
    
            fetch(`http://localhost:9000/internships/student/list/${incomingMentor.rollno}`, { headers })
                .then(response => response.json())
                .then(data => setInternships(data))
                .catch(error => console.error("Error fetching internships:", error));
        }
    }, [location.state, setMentor]);
    
    return (
        <>
            <Navbar />
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-7 mx-5 px-3">
                        <div className="text h3">
                            Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
                        </div>
                    </div>
                    <div className="col-2">
                        <img src={alumniDetails} alt="AlumniDetails" className="alumni" />
                    </div>
                </div>

                <div className="text h2 pt-3">
                    {mentor?.Name && (
                        <>Meet {mentor.Name}, working at {mentor.CompanyName}!</>
                    )}
                </div>

                <div className="row mt-4 pb-5">
                    <div className="col-2">
                        <Link className="btn btn-sm px-4 py-1 fs-6 rounded-4 btn-colorr" to="/alumnidetails">
                            Courses
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link className="btn btn-sm px-4 py-1 fs-6 rounded-4 btn-colorr" to="/alumnidetails/alumniwebinar">
                            Webinars
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link className="btn btn-sm px-4 py-1 fs-6 rounded-4 btn-colorr" to="/alumnidetails/alumniintership">
                            Internships
                        </Link>
                    </div>
                    {/* <div className="col-2">
                        <Link className="btn btn-sm px-4 py-1 fs-6 rounded-4 btn-colorr" to="/alumnidetails/alumniposts">
                            Posts
                        </Link>
                    </div> */}
                </div>

                <div className="row">
                    <Routes>
                        <Route path="/" element={<Courses posts={posts} />} />
                        <Route path="/alumniwebinar" element={<Webinar webinars={webinars} />} />
                        <Route path="/alumniintership" element={<Internship internships={internships} />} />
                        <Route path="/alumnicourse" element={<Courses posts={posts} />} />
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default AlumniDetails;
