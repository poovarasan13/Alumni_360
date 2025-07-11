import { useEffect, useState } from "react";
import "../../assets/style/AlumniDetails.css";
import defaultInternshipImg from "../../assets/images/intership.png";

const Internship = ({ internships }) => {


    return (
        <div className="row justify-content-center">
            {internships.length > 0 ? (
                internships.map((internship, index) => (
                    <div className="col-3" key={index}>
                        <div className="card rounded-top ">
                            <div className="d-flex justify-content-center">
                                <img
                                    src={internship.image ? `http://localhost:9000${internship.image}` : defaultInternshipImg}

                                    alt="Internship"
                                    className="img img-fluid alumniinternship card-img-top rounded-top"
                                />
                            </div>
                            <div className="pt-2">
                                <div className="row justify-content-center">
                                    <div className="col-9">
                                     <h6>{internship.name}</h6>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-3">
                                    <a
                                        href={internship.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm btn-colorr "
                                    >
                                        Apply
                                    </a>
                                </div>
                            </div>
                            
                    </div>
                    </div>
    ))
            ) : (
    <p>No internships available.</p>
)}
        </div >
    );
};

export default Internship;
