import intership from "../../assets/images/intership.png";
import "../../assets/style/AlumniDetails.css";
const AlumniWebinar=[
    {
        id:1,
        img:intership,
        topic:"FullStack Developer"
    }
    ,

    {
        id:2,
        img:intership,
        topic:"Data Science Developer"
    }
]

const Intership=()=>{
    return(
        <>
                <div className="row justify-content-center">
                    {AlumniWebinar.map((w,i)=>(
                          <div className="col-3" key={i}>
                          <div className="card rounded-top">
                          <div className="d-flex justify-content-center">
                              <img src={w.img} alt={i} className="img img-fluid alumniinternship card-img-top  rounded-top">
                               </img>
                          </div>
                        
                         <div className="card-body">
                            <div className="card-title">{w.topic}</div>
                              
                              <div className="row justify-content-center">
                                <div className="col-4">
                              
                              <div className="btn btn-sm btn-colorr mt-2">
                                        Apply
                              </div>
                              </div>
                              </div>
                         </div>
                          
                      </div>
                  </div>
                    ))}
                   
                </div>
        </>
    )
}

export default Intership;