import { useEffect, useState } from "react";
import "../../assets/style/AlumniDetails.css";
import coursesImg from "../../assets/images/onlinecourses.png";

const Courses = ({ posts }) => {
    const [courses, setCourses] = useState([]);

    // useEffect(() => {
    //     if (rollno) {
    //         fetch(`http://localhost:9000/courses/list/${rollno}`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log("Fetched Courses:", data);
    //                 setCourses(data);
    //             })
    //             .catch(error => console.error("Error fetching courses:", error));
    //     }
    // }, [rollno]);

    const handleNavigate = (course) => {
        if (course.link) {
            window.open(course.link, "_blank");
        } else {
            alert("No link available");
        }
    };

    return (
        <div className="row justify-content-center">
            {posts.length > 0 ? (
                posts.map((course, index) => (
                    <div className="col-4" key={index}>
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="d-flex justify-content-center">
                                <img 
                                    src={course.image ? `http://localhost:9000${course.image}` : webinarImage} 
                                    className="img img-fluid alumnicourse card-img-top" 
                                    alt={course.course} 
                                />
                            </div>
                            <div className="card-body">
                                <div className="card-text fw-light">{course.company}</div>
                                <div className="card-text fw-bolder">{course.course}</div>
                                <div className="card-text justify-content-center d-flex">
                                    <button className="btn btn-success btn-sm" onClick={() => handleNavigate(course)}>Visit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No courses available.</p>
            )}
        </div>
    );
};

export default Courses;
