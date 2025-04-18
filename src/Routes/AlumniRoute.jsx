import React from 'react'
import AlumniPost from '../Components/Alumni/AlumniPost';
import AlumniWebinar from '../Components/Alumni/AlumniWebinar';
import { Routes,Route } from 'react-router-dom';
import AlumniInternship from '../Components/Alumni/AlumniInternship';
const AlumniRoute = () => {
  return (
    <div>
         <Routes>
            <Route path="/" element={<AlumniPost/>}/>
             <Route path="/alumnipost" element={<AlumniPost/>}/>
             <Route path="/alumniwebinar" element={<AlumniWebinar/>}/>
             <Route path="/alumniinternship" element={<AlumniInternship/>}/>
             </Routes>
    </div>
  )
}

export default AlumniRoute;
