import "../assets/style/Logo.css";
import logo from "../assets/images/Logo/logo1.png";
const Logo=()=>{
    return(
        <>
                                                                                
            <div className=" text fw-bold  " style={{color:"rgb(74,9,85)"}}>
            Alumni <img src={logo} className="img-fluid img-logo  " alt="logo"></img>
            </div>   
            {/* <div className=" ms-2 ps-1">
                <img src={logo} className="img-fluid img-logo" alt="logo"></img>
            </div> */}
        </>
    )
}

export default Logo;