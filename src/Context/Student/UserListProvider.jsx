import React, { useState, useEffect } from 'react';
import Context from './index';

const UserListProvider = (props) => {
 
  const storedData = JSON.parse(localStorage.getItem('studentData'));

 
  const [name, setName] = useState(storedData?.name || '');
  const [mobile, setMobile] = useState(storedData?.mobile || '');
  const [rollno, setRollno] = useState(storedData?.rollno || '');
  const [student, setStudent] = useState(storedData?.student || false);


  useEffect(() => {
    const data = { name, mobile, rollno, student };
    localStorage.setItem('studentData', JSON.stringify(data));
  }, [name, mobile, rollno, student]); 
  return (
    <Context.Provider value={{ name, setName, mobile, setMobile, rollno, setRollno, student, setStudent }}>
      {props.children}
    </Context.Provider>
  );
};

export default UserListProvider;
