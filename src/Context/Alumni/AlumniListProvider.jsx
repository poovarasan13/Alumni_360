

import React, { useState } from 'react'
import Context from './index';
const AlumniListProvider = (props) => {

    const [alumniData,setAlumniData]=useState({
        Name:'',
        FieldofWorking:'',
        WorkLocation:'',
        ProfilePhoto:'',
        Gmail:'',
        Linkedin:'',
        rollno:'',
        CompanyName:'' 
    });

  return (
    <Context.Provider 
    value={{alumniData,setAlumniData}}>
                      {props.children}
    </Context.Provider>
  )
}

export default AlumniListProvider
