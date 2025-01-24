
import {Link} from "react-router-dom";
import "../../assets/style/SButton.css";
const SButton=(props)=>{
    //  const text=(props.color==="color1")? "color2":"color1";
    return(
        <>
            <div className="row justify-content-center py-3">
                
                <div className={`col-10 ${props.color} rounded-4 `}
                           >
                                            <Link to={props.path} className="text-decoration-none">
                            <div className="row justify-content-center">
                                <div className={`col-4  pt-2 h5`} style={{color: props.color==="color1" ? "rgb(85,23,94)": "white"}}>
                                {props.name}
                                </div>
                            </div>
                            </Link>

                
                
                </div>
           </div>
        
        </>
    )
}

export default SButton;