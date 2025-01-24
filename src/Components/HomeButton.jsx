import "../assets/style/HomeButton.css";
import {Link} from "react-router-dom";

const HomeButton=(props)=>{
    return(<>
        <Link  to={props.path}
        className="btn btn-sm  px-3  rounded-4 fw-bold "
        style={{
            backgroundColor:"black",
            color:"white",
            fontSize:"20px"
        }}><img src={props.image} className="me-2" alt={props.name}/>{props.name}</Link>
    </>)
};

export default HomeButton;
