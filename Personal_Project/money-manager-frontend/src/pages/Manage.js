import React from 'react';
import NavBar from '../components/NavBar/NavBar';

const Manage = props => {
  return (
    <NavBar setRole={props.setRole}/>
  );
}

export default Manage;