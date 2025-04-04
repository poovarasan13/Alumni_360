import React from 'react'
import AdminSideBar from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Services/Dashboard'
import AddStudents from './Services/AddStudents'
import MakeAlumni from './Services/MakeAlumni'

const AdminPage = () => {
  return (
    <div>
         <div className="container-fluid ">
            <div className="row">
                <div className="col-2 ps-5 bg-light pt-5">
                       <AdminSideBar/>
                </div>
                <div className="col">
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/addstudents" element={<AddStudents/>}/>
                        <Route path='/makestudents' element={<MakeAlumni/>}/>

                    </Routes>

                </div>
            </div>
         </div>
    </div>
  )
}

export default AdminPage
