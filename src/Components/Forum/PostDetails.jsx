import { useLocation } from "react-router-dom";
import "../../assets/style/PostDetails.css";
import { useState } from "react";
import Image from "../../assets/images/Person.png";
import PostComment from "./PostComment";
const PostDetails = () => {
    const location = useLocation();
    const { Image, name, content, imgPost, para } = location.state || {};

    if (!location.state) {
        return <div>Invalid data or missing state!</div>;
    }
   const[Login,setLogin]=useState(false);
   const[comment,setComment]=useState("");

   const comments=[
    {
      pImage:Image,
      pName:"Siranjeevi",
      pComment:"It's good but not work as well",
    },
    {
        pImage:Image,
        pName:"Poovarasan",
        pComment:"It's good but not work as well",
      },
      {
        pImage:Image,
        pName:"Vishwa",
        pComment:"It's good but not work as well",
      },
      {
        pImage:Image,
        pName:"Siranjeevi",
        pComment:"It's good but not work as well",
      },
      {
        pImage:Image,
        pName:"Logesh",
        pComment:"It's good but not work as well",
      },
      {
        pImage:Image,
        pName:"Siranjeevi",
        pComment:"It's good but not work as well",
      },
      {
        pImage:Image,
        pName:"Siranjeevi",
        pComment:"It's good but not work as well",
      },
 ]
    return (
        <>
           <div className="container">
           <div className="row ms-4 py-3">
                <div className="col-9">
                    <div className="card rounded-4" >
                        <div className="card-body" >
                            <div className="row justify-content-start ">
                                <div className="col-1">
                                <i className="bi bi-arrow-left-circle" style={{ fontSize: "2rem", cursor: "pointer" }}></i>
                                </div>
                                <div className="col-1 rounded "><img src={Image} alt="image" className="pro"/>  
                                </div>
                                <div className="col-2 pt-2 ">
                                    <div className="name h5">{name}</div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <div className="text-start h5 fw-bold">
                                      {content}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="text text-start fw-light">
                                        {para}
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                               <div className="col ">
                                <img src={imgPost} alt="post" className="post rounded-3" ></img>
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
                            <div className="row">

                                    {Login&&
                                                            <div className="col-2">
                                    <div className="btn btn-sm btn-primary rounded-4 mt-3">
                                        <div className="text">Add Comment</div>
                                    </div>
                                    </div> }

                                    { !Login&&
                                    <div className="col">
                                    <form>
                                        <div className="row justify-content-start">
                                            <div className="col-12">
                                            <div className="mb-3">
                                        <input type="email" className="form-control border-2" value={comment} onChange={(e)=>setComment(e.target.value)} style={{}} />
                                    </div>  
                                            </div>
                                        </div>
                                        <div className="row justify-content-start">
                                            <div className="col-1">
                                                <div className="btn btn-sm btn-primary">Comment</div></div></div>   
                                    </form>

                                    </div>
                                    }

                                    </div>
                                    {comments.map((comment,index)=>
                                    (
                                        <PostComment key={index} {...comment}/>
                                    ))}
                                          {/* <PostComment/> */}

                        </div>
                    </div>
                    
                </div>
            </div>
           </div>
        </>
    );
};

export default PostDetails;
