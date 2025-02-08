
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forum from './Components/Forum';
import Home from './Components/Home';
import Mentor from './Components/Mentor';
import StudentHome from './Components/Student/StudentHome';
import StudentLogin from './Components/Student/StudentLogin';
import StudentMain from './Components/Student/StudentMain';
import Volunteers from './Components/Volunteers';
import AlumniDetails from './Components/Student/AlumniDetails';
function App() {

  return (
    <BrowserRouter>
          <Routes>
                   <Route index element={<Home/>}/>
                   <Route path="/home" element={<Home/>}/> 
                   <Route path="/mentor" element={<Mentor/>}/> 
                   <Route path="/forum/*" element={<Forum/>}/>  
                   <Route path="/volunteers" element={<Volunteers/>}/> 
                   <Route path="/studentmain" element={<StudentMain/>}/>
                   <Route path="/studenthome/*" element={<StudentHome/>}/>
                   <Route path="/studentlogin" element={<StudentLogin/>}/>
                   <Route path="/alumnidetails/*" element={<AlumniDetails/>}/>
          </Routes>
    </BrowserRouter>
  )
}

export default App
