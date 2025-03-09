import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <div>
         <div className="row">
            <Link className='list-group-item list-group-item-action h6 p-3' to='/admin/dashboard'>Dashboard</Link>
            <Link className='list-group-item list-group-item-action h6 p-3' to='/admin/addstudents'>Add Students</Link>
            <Link className='list-group-item list-group-item-action h6 p-3' to='/admin/dashboard'>Make Alumni</Link>
            <Link className='list-group-item list-group-item-action h6 p-3' to='/admin/addstudents'>Setting</Link>
            
         </div>
    </div>
  )
}

export default AdminSideBar
