

import React, { useState } from 'react'
import Context from './index';
const UserListProvider = (props) => {

    const [name,setName]=useState('');
    const[mobile,setMobile]=useState('');
     const[password,setPassword]=useState('');
  return (
    <Context.Provider 
    value={{name,setName,mobile,setMobile,password,setPassword}}>
      {props.children}
    </Context.Provider>
  )
}

export default UserListProvider
