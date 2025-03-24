import { useEffect, useState } from "react";
import "../../assets/style/AlumniDetails.css";
import defaultInternshipImg from "../../assets/images/intership.png";

const Internship = ({ internships }) => {
    // const [internships, setInternships] = useState([]);

    // useEffect(() => {
    //     if (rollno) {
    //         fetch(`http://localhost:9000/internships/list/${rollno}`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log("Fetched Internships:", data);
    //                 setInternships(data);
    //             })
    //             .catch(error => console.error("Error fetching internships:", error));
    //     }
    // }, [rollno]);

    return (
        <div className="row justify-content-center">
            {internships.length > 0 ? (
                internships.map((internship, index) => (
                    <div className="col-3" key={index}>
                        <div className="card rounded-top">
                            <div className="d-flex justify-content-center">
                                <img 
                                src={internship.image ? `http://localhost:9000${internship.image}` : defaultInternshipImg} 
                                    // src={internship.img || defaultInternshipImg} 
                                    alt="Internship" 
                                    className="img img-fluid alumniinternship card-img-top rounded-top" 
                                />
                            </div>
                            <div className="card-body">
                                <div className="card-title">{internship.topic}</div>
                                <div className="row justify-content-center">
                                    <div className="col-4">
                                        <button className="btn btn-sm btn-colorr mt-2">
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No internships available.</p>
            )}
        </div>
    );
};

export default Internship;
