import React from 'react'
import CardImage from "../../assets/images/webinar.png";
function AlumniPost() {
    const posts=[
        {
           name:"Post1",
           image:CardImage,
           description:""
        },{

        }
    ]
    return (
       <>

  <div className="row px-5 mx-5 mb-4 mt-3">
                    <div className="col-3 ">
                        <div className="card rounded-0">
                            <img src={CardImage} alt="alumniPage" className="img img-fluid px-3 pt-3" style={{height:"180px",width:"auto"}}/>
                            <div className="card-body"> 
                                <div className="card-text">
                                    DEcndksvlnvnsvldnfv;lkncv djfvndflkvn dfjvnfdkcxlvn dlkfnvjk djfv c djfvb
                                </div>
                            </div>
                        </div>
                    </div>

                 </div>
       </> 
    )
}

export default AlumniPost
