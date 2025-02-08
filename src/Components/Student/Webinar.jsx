import webinar from "../../assets/images/webinar.png";
import "../../assets/style/AlumniDetails.css";
const AlumniWebinar=[
    {
        id:1,
        img:webinar,
        time:"1:00-3:30 am",
        date:"23/02/2025",
        topic:"Stacks"
    }
    ,

    {
        id:2,
        img:webinar,
        time:"2:00-4:30 am",
        date:"03/04/2025",
        topic:"Career Development"
    }
]

const Webinar=()=>{
    return(
        <>
                <div className="row justify-content-center">
                    {AlumniWebinar.map((w,i)=>(
                          <div className="col-3" key={i}>
                          <div className="card rounded-top">
                          <div className="d-flex justify-content-center">
                              <img src={w.img} alt={i} className="img img-fluid alumniwebinar card-img-top  rounded-top">
                               </img>
                          </div>
                        
                         <div className="card-body">
                            <div className="card-title">{w.topic}</div>
                            <div className="card-subtitle " style={{fontSize:"15px"}}>{w.date} ({w.time})</div>
                              
                              <div className="row justify-content-center">
                                <div className="col-4">
                              
                              <div className="btn btn-sm btn-colorr mt-2">
                                        Join
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

export default Webinar;