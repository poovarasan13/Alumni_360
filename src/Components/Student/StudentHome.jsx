import Navbar from "../Navbar";
import MentorCard from "./MentorCard";
import "../../assets/style/StudentHome.css";
import P from "../../assets/images/Person.png";
import Footer from "../Footer";
import AlumniDetails from "../Student/AlumniDetails";
const StudentHome=()=>
{
    const Mentors=[
        {
            image:P,
            name:"John Wick",
            company:"Tech-solution",
            gmail:"https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDXXlhwrxnqGngKWJLzsnxWFZJlJCxCmCdBkhZvWJwKmrvghkDdGGjBthjZBkGzqQVXnpsq",
            linkedin:"https://www.linkedin.com/in/poovarasan-saravanan-b40817267/"
        },
        {
            image:P,
            name:"John Wick",
            company:"Tech-solution",
            gmail:"https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDXXlhwrxnqGngKWJLzsnxWFZJlJCxCmCdBkhZvWJwKmrvghkDdGGjBthjZBkGzqQVXnpsq",
            linkedin:"https://www.linkedin.com/in/poovarasan-saravanan-b40817267/"
        },
        {
            image:P,
            name:"John Wick",
            company:"Tech-solution",
            gmail:"https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDXXlhwrxnqGngKWJLzsnxWFZJlJCxCmCdBkhZvWJwKmrvghkDdGGjBthjZBkGzqQVXnpsq",
            linkedin:"https://www.linkedin.com/in/poovarasan-saravanan-b40817267/"
        },
        {
            image:P,
            name:"John Wick",
            company:"Tech-solution",
            gmail:"https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDXXlhwrxnqGngKWJLzsnxWFZJlJCxCmCdBkhZvWJwKmrvghkDdGGjBthjZBkGzqQVXnpsq",
            linkedin:"https://www.linkedin.com/in/poovarasan-saravanan-b40817267/"
        },
        {
            image:P,
            name:"John Wick",
            company:"Tech-solution",
            gmail:"https://mail.google.com/mail/u/0/#inbox?compose=new",
            linkedin:"https://www.linkedin.com/in/poovarasan-saravanan-b40817267/"
        },
        {
            image:P,
            name:"John Wick",
            company:"Tech-solution",
            gmail:"https://mail.google.com/mail/u/0/#inbox?compose=new",
            linkedin:"https://www.linkedin.com/in/poovarasan-saravanan-b40817267/"
        },
        {
            image:P,
            name:"John Wick",
            company:"Tech-solution",
            gmail:"https://mail.google.com/mail/u/0/#inbox?compose=new",
            linkedin:"https://www.linkedin.com/in/poovarasan-saravanan-b40817267/"
        }
    ]
    return(
        <>
           <Navbar/>
           <div className="container-fluid div-color pt-5">
                <div className="row mx-4 pt-3">
                        {
                            Mentors.map((Mentor,index)=>(
                                <MentorCard key={index} {...Mentor}/>
                            ))
                        }

                </div>
           </div>
               {/* <AlumniDetails/> */}
           
           <Footer/>
        </>
    )
}

export default StudentHome;