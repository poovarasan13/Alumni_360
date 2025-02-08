
import "../../assets/style/MentorCard.css";
// import P from "../../assets/images/Person.png";
import Gmail from "../../assets/images/Gmail.png";
import Linkedin from "../../assets/images/Linkedin.png";
import { Link } from "react-router-dom";

const MentorCard=(props)=>{
    return(
        <>
        <div className="col-3   text-center  my-3 ">
            <div className="card card-color rounded-3 border border-2" style={{width:"15rem"}}>
                <div className="card-body">
                <div className="row">
                   
                <div className="col">
                <Link to="/alumnidetails">
                    <img src={props.image} alt="profile" className="img-p"/>
                    </Link>
                </div>
                <div className="text h4 text-center text-color mt-2 fw-bold " >
                    {props.name}
                </div>
                <div className="text h6 fw-bold ">
                      {props.company} 
                </div>

                 <div className="row justify-content-center">
                    <div className="col-3">
                        <Link to={props.gmail}>
                         <img src={Gmail} alt="gmail" className="gmail"/>
                         </Link>
                    </div>
                    <div className="col-3">
                        <Link to={props.linkedin}>
                    <img src={Linkedin} alt="linkedin" className="linkedin"/>
                    </Link>
                    </div>
                 </div>
            </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default MentorCard;