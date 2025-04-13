
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
