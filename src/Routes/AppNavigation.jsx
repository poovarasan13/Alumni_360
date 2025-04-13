import React from 'react'
import Home from '../Components/Home';
import Mentor from '../Components/Mentor';
import Forum from '../Components/Forum';
import Volunteers from '../Components/Volunteers';
import StudentMain from '../Components/Student/StudentMain';
import StudentHome from '../Components/Student/StudentHome';
import StudentLogin from '../Components/Student/StudentLogin';
import AlumniDetails from '../Components/Student/AlumniDetails';
import AlumniLogin from '../Components/Alumni/AlumniLogin'
import AlumniPage from '../Components/Alumni/AlumniPage';
import { Routes,Route } from 'react-router-dom';
import AdminPage from '../Components/Admin';
import AdminLogin from '../Components/Admin/AdminLogin';
const AppNavigation = () => {
  return (
    <div>
      <Routes>
                   <Route index element={<Home/>}/>
                   <Route path="/home" element={<Home/>}/>
                   <Route path="/mentor" element={<Mentor/>}/>
                   <Route path="/forum/*" element={<Forum/>}/>
                   <Route path="/volunteers" element={<Volunteers/>}/>
                   <Route path="/studentmain" element={<StudentMain/>}/>
                   <Route path="/studenthome/*" element={<StudentHome/>}/>
                   <Route path="/alumnilogin" element={<AlumniLogin/>}/>
                   <Route path="/studentlogin" element={<StudentLogin/>}/>
                   <Route path="/alumnidetails/*" element={<AlumniDetails/>}/>
                   <Route path="/alumnipage/*" element={<AlumniPage/>}/>\
                   <Route path="/admin" element={<AdminLogin/>}/>
                   <Route path="/adminpage/*" element={<AdminPage/>}/>
                   
          </Routes>
    </div>
  )
}

export default AppNavigation
