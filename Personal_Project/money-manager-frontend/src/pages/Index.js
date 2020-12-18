import React, { useRef } from 'react';
import NavBar from '../components/NavBar/NavBar';
import ModalForm from '../components/ModalForm/ModalForm';
import Login from '../components/Login/Login';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

import 'antd/dist/antd.css';

const Index = props => {
  const childRef = useRef();

  return (
    <>
      <NavBar onClick={() => { childRef.current.showModal() }}/>
      <ModalForm ref={childRef} title={'Login'} form={<Login setRole={props.setRole}/>} button={false} des={''}/>
      <ModalForm title={'Sign Up'} form={<RegistrationForm />} button={true} des={'Sign Up'}/>
    </>
  );
}

export default Index;