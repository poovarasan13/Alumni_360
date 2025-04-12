
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Forum from './Components/Forum';
// import Home from './Components/Home';
// import Mentor from './Components/Mentor';
// import StudentHome from './Components/Student/StudentHome';
// import StudentLogin from './Components/Student/StudentLogin';
// import StudentMain from './Components/Student/StudentMain';
// import Volunteers from './Components/Volunteers';
// import AlumniDetails from './Components/Student/AlumniDetails';
// import AlumniPage from './Components/Alumni/AlumniPage';
import AlumniListProvider from './Context/Alumni/AlumniListProvider';
import MentorProvider from './Context/Alumni/MentorProvider';
import UserListProvider from './Context/Student/UserListProvider';
import AppNavigation from './Routes/AppNavigation';
function App() {

  return (
    <><AlumniListProvider>
             <MentorProvider>                
                    <UserListProvider>
                             <AppNavigation/>
                   </UserListProvider>
             </MentorProvider>
      </AlumniListProvider>
    </>
  )
}

export default App
