import React from 'react';
import LocalStorageService from '../../services/localStorageService';

import { Menu, Dropdown, notification } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const Setting = props => {
  const logout = () => {
      LocalStorageService.removeToken();
      props.setRole('guest');
      notification.success({
        message: `You were logout.`,
        placement: 'bottomRight'
      });
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          Update profile
      </a>
      </Menu.Item>
      <Menu.Item onClick={logout} danger>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <SettingOutlined style={{fontSize: 20, color: 'black'}}/>
      </a>
    </Dropdown>
  );

}

export default Setting;