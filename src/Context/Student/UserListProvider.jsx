

import React, { useState } from 'react'
import Context from './index';
const UserListProvider = (props) => {

    const [name,setName]=useState('');
    const[mobile,setMobile]=useState('');
     const[rollno,setRollno]=useState('');
     const [student,setStudent]=useState(false);
  return (
    <Context.Provider 
    value={{name,setName,mobile,setMobile ,rollno,setRollno,student,
      setStudent
    }}>
      {props.children}
    </Context.Provider>
  )
}

export default UserListProvider
