import React, { useState, useEffect } from 'react';
import Context from './index';

const AlumniListProvider = (props) => {
  const [alumniData, setAlumniData] = useState(() => {
    const storedData = localStorage.getItem('alumniData');
    return storedData
      ? JSON.parse(storedData)
      : {
          Name: '',
          FieldofWorking: '',
          WorkLocation: '',
          ProfilePhoto: '',
          Gmail: '',
          Linkedin: '',
          rollno: '',
          CompanyName: '',
          alumni: false
        };
  });

  const [skipSave, setSkipSave] = useState(false); // new flag

  useEffect(() => {
    if (!skipSave) {
      localStorage.setItem('alumniData', JSON.stringify(alumniData));
    }
  }, [alumniData, skipSave]);

  return (
    <Context.Provider value={{ alumniData, setAlumniData, setSkipSave }}>
      {props.children}
    </Context.Provider>
  );
};

export default AlumniListProvider;
