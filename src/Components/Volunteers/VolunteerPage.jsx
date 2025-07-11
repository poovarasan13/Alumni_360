import React from 'react'
import volunteer from '../../assets/images/volunteer.png'
import person from "../../assets/images/Person.png"
import user from "../../assets/images/user.png"
function VolunteerPage() {
    const volunteerData=[
        {
            image:volunteer,
            title:"BESHARE SOCIAL MEDIA AMASSADORS",
            description:"Spread the word about the great things happening at Brown with just one click or tap. Boost the profile of the University and help keep friends and alumni connected to Brown"
        },
        {
            image:person,
            title:"CLASS VOLUNTEER",
            description:"Help classmates shape opportunities for alumni to reconnect—with Brown and with each other."
        },
        {
            image:user,
            title:"PARENTS LEADERSHIP COUNCIL",
            description:"Through their philanthropic support and volunteer outreach, members of the Parents Leadership Council have made The Parents Fund the top parent fundraising program in the Ivy League."
        },
    ]
    return (
        <>
        <div className="container-fluid white">

        <div className="container pt-5 mt-5 ">
            <div className="row">
                <div className="col fs-2">Volunteer Opportunities</div>
            </div>
            <div className="row mt-3">
                <div className="col h5 fw-normal">Connect with fellow Brunonians in meaningful ways and help shape the future of your alma mater 
                    in the process.Every contribution of your time and talent is welcome.</div>
            </div>
            <div className="row mt-3">
                <div className="col fs-4">What can we do together?</div>
            </div>
            <div className="row mt-1">
                <div className="col h5  fw-normal">Help plan and execute an alumni event. Become a social media ambassador. Encourage others 
                    to give back to Brown. No matter your role, as a Brown volunteer, you can deepen your connection to the University while also 
                    gaining new skills and expanding your social and professional networks.</div>
            </div>

            <div className="row bg1 py-5">
                   <div className="row">
                        <div className="col h5 ms-3">All Volunteer Opportunities - Browse and Search</div>
                   </div>
                   <div className="row">
                        <div className="col fs-5 fw-light mx-5">Explore ideas for your future volunteer path or learn how to start getting involved as a Brown volunteer. This collection of 40+ volunteer options will help you find an experience that suits your schedule, aligns with your interests, and taps into your expertise.</div>
                   </div>
            </div>


                {
                    volunteerData.map((data,index)=>(
                        <div className="row mt-3" key={index}>
                        <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-4">
                                        <img src={data.image}
                                        style={{
                                            width:"300px",
                                            height:"200px"
                                        }}
                                        />
                                    </div>
                                    <div className="col-8 mt-4">
                                        <div className="row h4 pt-3">{data.title}</div>
                                        <div className="row pe-5 pt-3">{data.description}
    
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    ))
                }
            
        </div>
        </div>
        
        
        </>
    )
}

export default VolunteerPage
