import "../../assets/style/MentorCard.css";
import Gmail from "../../assets/images/Gmail.png";
import Linkedin from "../../assets/images/Linkedin.png";
import { Link, useNavigate } from "react-router-dom";

const MentorCard = (props) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate("/alumnidetails", { state: { mentor: props } });
    };

    return (
        <div className="col-3 text-center my-3">
            <div className="card card-color rounded-3 border border-2" style={{ width: "15rem" }}>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <img 
                                src={`http://localhost:9000${props.ProfilePhoto}`} 
                                alt="profile" 
                                className="img-p rounded-circle"
                                onClick={handleCardClick} 
                                style={{ cursor: "pointer" }} 
                            />
                        </div>
                        <div className="text h4 text-center text-color mt-2 fw-bold">
                            {props.Name}
                        </div>
                        <div className="text h6 fw-bold">
                            {props.CompanyName}
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-3">
                                <a href={`mailto:${props.Gmail}`}>
                                    <img src={Gmail} alt="gmail" className="gmail" />
                                </a>
                            </div>
                            <div className="col-3">
                                <a href={props.Linkedin} target="_blank" rel="noopener noreferrer">
                                    <img src={Linkedin} alt="linkedin" className="linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorCard;
