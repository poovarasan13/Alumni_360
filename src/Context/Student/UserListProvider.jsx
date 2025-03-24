

import React, { useState } from 'react'
import Context from './index';
const UserListProvider = (props) => {

    const [name,setName]=useState('');
    const[mobile,setMobile]=useState('');
     const[rollno,setRollno]=useState('');
  return (
    <Context.Provider 
    value={{name,setName,mobile,setMobile ,rollno,setRollno}}>
      {props.children}
    </Context.Provider>
  )
}

export default UserListProvider
