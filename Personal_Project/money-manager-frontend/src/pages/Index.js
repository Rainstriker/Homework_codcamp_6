import React, { useRef } from 'react';
import NavBar from '../components/NavBar/NavBar.js';
import ModalForm from '../components/ModalForm/ModalForm.js';
import Login from './Login.js';
import 'antd/dist/antd.css';
import { Button } from 'antd';


const Index = () => {
  const childRef = useRef();

  
  return (
    <>
      <NavBar onClick={() => { childRef.current.showModal() }}/>
      <ModalForm ref={childRef} title={'Login'} form={<Login />}/>

    </>
  );
}

export default Index;