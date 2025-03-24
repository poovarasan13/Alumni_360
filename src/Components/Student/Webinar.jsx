import { useEffect, useState } from "react";
import webinarImage from "../../assets/images/webinar.png";
import "../../assets/style/AlumniDetails.css";

const Webinar = ({ webinars }) => {
    return (
        <div className="row justify-content-center">
            {webinars.length > 0 ? (
                webinars.map((w, i) => (
                    <div className="col-3" key={i}>
                        <div className="card rounded-top">
                            <div className="d-flex justify-content-center">
                                <img 
                                src={w.image ? `http://localhost:9000${w.image}` : webinarImage} 
                                    alt={w.topic} 
                                    className="img img-fluid alumniwebinar card-img-top rounded-top" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">{w.webinarname || w.topic}</div>
                                <div className="card-subtitle" style={{ fontSize: "15px" }}>
                                    {w.date} ({w.time})
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-4">
                                        <a href={w.link} target="_blank" rel="noopener noreferrer" 
                                            className="btn btn-sm btn-colorr mt-2">
                                            Join
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No webinars available.</p>
            )}
        </div>
    );
};

export default Webinar;