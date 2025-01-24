import "../assets/style/HomeButton.css";

const HomeButton=(props)=>{
    return(<>
        <button  
        className="btn btn-sm  px-3  rounded-4 fw-bold "
        style={{
            backgroundColor:"black",
            color:"white",
            fontSize:"20px"
        }}><img src={props.image} className="me-2" alt={props.name}/>{props.name}</button>
    </>)
};

export default HomeButton;
