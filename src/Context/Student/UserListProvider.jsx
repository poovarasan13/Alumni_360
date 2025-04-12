import React, { useState, useEffect } from 'react';
import Context from './index';

const UserListProvider = (props) => {
  const storedData = JSON.parse(localStorage.getItem('studentData'));

  const [name, setName] = useState(storedData?.name || '');
  const [mobile, setMobile] = useState(storedData?.mobile || '');
  const [rollno, setRollno] = useState(storedData?.rollno || '');
  const [student, setStudent] = useState(storedData?.student || false);
  const [skipSave, setSkipSave] = useState(false); // NEW flag

  useEffect(() => {
    if (!skipSave) {
      const data = { name, mobile, rollno, student };
      localStorage.setItem('studentData', JSON.stringify(data));
    }
  }, [name, mobile, rollno, student, skipSave]);

  return (
    <Context.Provider value={{
      name, setName,
      mobile, setMobile,
      rollno, setRollno,
      student, setStudent,
      setSkipSave 
    }}>
      {props.children}
    </Context.Provider>
  );
};

export default UserListProvider;
