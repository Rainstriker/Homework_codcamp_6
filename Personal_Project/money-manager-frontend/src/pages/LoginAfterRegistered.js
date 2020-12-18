import React from 'react';
import Login from '../components/Login/Login';

const LoginAfterRegistered = props => {
  return (
    <>
      <Login setRole={props.setRole}/>
    </>
  );
}

export default LoginAfterRegistered;