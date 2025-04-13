import { useEffect, useState } from "react";
import "../../assets/style/AlumniDetails.css";
import defaultInternshipImg from "../../assets/images/intership.png";

const Internship = ({ internships }) => {
  

    return (
        <div className="row justify-content-center">
            {internships.length > 0 ? (
                internships.map((internship, index) => (
                    <div className="col-3" key={index}>
                        <div className="card rounded-top">
                            <div className="d-flex justify-content-center">
                                <img 
                                src={internship.image ? `http://localhost:9000${internship.image}` : defaultInternshipImg} 
                                   
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
