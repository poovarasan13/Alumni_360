import "../../assets/style/AlumniDetails.css";
import courses from "../../assets/images/onlinecourses.png";
import {useNavigate} from "react-router-dom"
const AlumniCourses=[
    {
        id:1,
        company:"Google",
        course:"Google Data Analystics",
        img:courses,
        link:"https://getbootstrap.com/docs/4.0/utilities/flex/"

    },
    {
        id:2,
        company:"IBM",
        course:" Data Science",
        img:courses,
        link:""
    },
    {
        id:3,
        company:"Meta",
        course:"React Js",
        img:courses,
        link:""
    },
]

const Courses=()=>{
    const navigate=useNavigate();
    const handleNavigate=(c)=>{
        if(c.link)
        {
            window.open(c.link,"_blank");
        }
        else{
            alert("No link available");
        }
    }
    return(
        <>
        <div className="row justify-content-center">
        {AlumniCourses.map((c,index)=>
        (

                     <div className="col-4 " key={index}>
                        <div className="card " style={{width:"20rem"}}>
                        <div className="d-flex justify-content-center">
                        <img src={c.img} className="img img-fluid alumnicourse card-img-top" alt={index}/>
                          </div>
                            <div className="card-body ">
                               <div className="card-text fw-light">
                                {c.company}
                               </div>
                               <div className="card-text fw-bolder ">
                                {c.course}
                               </div>
                               <div className="card-text justify-content-center  d-flex ">
                                <div className="btn btn-success btn-sm" onClick={()=>handleNavigate(c)}>Visit</div>
                               </div>
                            </div>
                        </div>
                     </div>


        ))};
            </div> 
       
        </>
    )
}
export default Courses;