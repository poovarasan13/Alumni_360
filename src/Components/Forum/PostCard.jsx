
// import P from "../../assets/images/Person.png";
// import post from "../../assets/images/post.png";r
import "../../assets/style/PostCard.css";
import  {useNavigate} from "react-router-dom";
import Img from "../../assets/images/StudentLogin.png"
const PostCard=(props)=>{
    const navigate=useNavigate();
     function click(){
        navigate('/forum/postdetails',{
            state:{
                Image:props.Image,
                name:props.name,
                content:props.content,
                imgPost:props.imgPost,
                para:props.para,
            }}
        );
     }
    return(
        <div>
                <div className="row ms-4 py-3" 
                // style={{backgroundImage:`url(${Img})`}}
                >
                <div className="col-8">
                    <div className="card rounded-4" onClick={click}>
                        <div className="card-body" >
                            <div className="row justify-content-start ">
                                <div className="col-1 rounded"><img src={props.Image} alt="image" className="pro"/>  
                                </div>
                                <div className="col-2 ">
                                    <div className="name ">{props.name}</div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <div className="text-start h5 fw-bold">
                                      {props.content}
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                               <div className="col ">
                                <img src={props.imgPost} alt="post" className="postt rounded-3" ></img>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-1 text-end">
                                <i className="bi bi-share-fill "></i>
                                    {/* <img src={share} alt="share" className="share"/> */}
                                </div>
                                <div className="col-1 text">
                                <i className="bi bi-chat-left"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostCard;