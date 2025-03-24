import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import MentorCard from "./MentorCard";
import "../../assets/style/StudentHome.css";
import Footer from "../Footer";

const StudentHome = () => {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/alumni")  
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setMentors(data.alumni);
                    console.log(data.alumni);
                } else {
                    console.error("Failed to fetch mentors", data.message);
                }
            })
            .catch((error) => console.error("Error fetching mentors:", error));
    }, []);

    return (
        <>
            <Navbar />
            <div className="container-fluid div-color pt-5">
                <div className="row mx-4 pt-3">
                    {mentors.length > 0 ? (
                        mentors.map((mentor, index) => (
                            <MentorCard key={index} {...mentor} />
                        ))
                    ) : (
                        <p className="text-center">No mentors available</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default StudentHome;
