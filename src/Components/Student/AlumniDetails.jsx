import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import alumniDetails from "../../assets/images/alumniDetails.png";
import "../../assets/style/AlumniDetails.css";
import { Routes, Route, Link } from "react-router-dom";
import Courses from "./Courses";
import Webinar from "./Webinar";
import Internship from "./Intership";
// import Posts from "./Posts"; // Import Posts Component

const AlumniDetails = () => {
    const location = useLocation();
    const mentor = location.state?.mentor || {}; 

    const [webinars, setWebinars] = useState([]);
    const [posts, setPosts] = useState([]);
    const [internships, setInternships] = useState([]);

    console.log(mentor.rollno);

    useEffect(() => {
        if (mentor.rollno) {
           
            fetch(`http://localhost:9000/webinars/list/${mentor.rollno}`)
                .then(response => response.json())
                .then(data => setWebinars(data))
                .catch(error => console.error("Error fetching webinars:", error));


            fetch(`http://localhost:9000/posts/list/${mentor.rollno}`)
                .then(response => response.json())
                .then(data => setPosts(data))
                .catch(error => console.error("Error fetching posts:", error));

   
            fetch(`http://localhost:9000/internships/list/${mentor.rollno}`)
                .then(response => response.json())
                .then(data => setInternships(data))
                .catch(error => console.error("Error fetching internships:", error));
        }
    }, [mentor.rollno]);
    console.log(webinars)
    console.log(posts);
    console.log(internships);
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
                    {mentor.Name?.length > 0 && (
                        <>Meet {mentor.Name}, working at {mentor.CompanyName}!</>
                    )}
                </div>

                <div className="row mt-4 pb-5">
                    <div className="col-2">
                        <Link className="btn btn-sm px-4 py-1 fs-6 rounded-4 btn-colorr" to="/alumnidetails/alumnnicourse">
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
