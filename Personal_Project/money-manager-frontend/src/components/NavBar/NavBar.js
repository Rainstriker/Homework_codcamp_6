import React from 'react';
import Setting from '../Setting/Setting';

const NavBar = props => {
  const changeTool = () => {
    if (window.location.pathname === '/manage') {
      return (
        <Setting setRole={props.setRole}/>
      );
    } else {
      return (
        <p>
            <a style={{ color: 'black', fontSize: 14, fontFamily: 'Roboto', margin: 'auto' }}
              onClick={props.onClick}>
              Login
          </a>
        </p>
      );
    }
  }

  return (
    <>
      <nav style={{
        height: 54,
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #D2D2D2',
      }}>
        <div style={{
          padding: '15px 20px 0px 20px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          maxWidth: 975
        }}>
          <h1 style={{ fontSize: 24, fontFamily: 'Rozha One, serif' }}>Money Manager</h1>
          {changeTool()}
        </div>
      </nav>
    </>
  );
}

export default NavBar;