
import "../../assets/style/MentorCard.css";
import P from "../../assets/images/Person.png";
import Gmail from "../../assets/images/Gmail.png";
import Linkedin from "../../assets/images/Linkedin.png";
// import { Link } from "react-router-dom";
const MentorCard=()=>{
    return(
        <>
        <div className="col-3   text-center mx-5 my-2 ">
            <div className="card card-color rounded-3 border border-2" style={{width:"15rem"}}>
                <div className="card-body">
                <div className="row">
                <div className="col">
                    <img src={P} alt="profile" className="img-p"/>
                </div>
                <div className="text h4 text-center text-color mt-2 fw-bold " >
                    John Wick
                </div>
                <div className="text h6 fw-bold ">
                      Tech-solution 
                </div>
                 <div className="row">
                    <div className="col">
                         <img src={Gmail} alt="gmail" className="gmail"/>
                    </div>
                    <div className="col">
                    <img src={Linkedin} alt="linkedin" className="gmail"/>
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