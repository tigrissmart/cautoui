import React from "react";
import {Menu} from "antd";
import { Link } from "react-router-dom";

const NaviMenu = () => {
    const items = [
        { key: '1', label: 'Home', path: '/' },
        { key: '2', label: 'Students', path: '/student-list' },
        { key: '3', label: 'Teachers', path: '/teacher-list' },
       
       ]
  return (
    <div>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
      {items.map(item=>{
          return <Menu.Item key={item.key}><span>{item.label}</span><Link to={item.path}/></Menu.Item>
      })    
      }     
      </Menu>
      </div>
  );
};
export default NaviMenu;
