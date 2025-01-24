
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Volunteers from './Components/Volunteers';
import Mentor from './Components/Mentor';
import Forum from './Components/Forum';

function App() {

  return (
    <BrowserRouter>
          <Routes>
                   <Route index element={<Home/>}/>
                   <Route path="/home" element={<Home/>}/> 
                   <Route path="/mentor" element={<Mentor/>}/> 
                   <Route path="/forum" element={<Forum/>}/>  
                   <Route path="/volunteers" element={<Volunteers/>}/> 
          </Routes>
    </BrowserRouter>
  )
}

export default App
