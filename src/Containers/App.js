import React from "react";
import { Layout } from "antd";

import NaviMenu from "../Components/Navi/NaviMenu";
import Home from "./Home";
import StudentList from "../Components/Students/StudentList";
import { Routes, Route } from "react-router-dom";
import ModalManager from "../Libs/ModalManager";



const { Header, Footer, Content } = Layout;
const App = () => {
  return (
    <Layout className="layout">
      <Header>
        <NaviMenu />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <ModalManager/>
        <div className="site-layout-content">
          
    <Routes>
        <Route path="/"  element={<Home />}  />
        <Route exact path="/student-list" element={<StudentList/>} />
  
    </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Cauto by TigrisSmart ©2022</Footer>
    </Layout>
  );
};

export default App;
