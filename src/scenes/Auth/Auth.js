import React, {useState, useEffect} from 'react';
import { Signup } from './Signup/Signup';
import { Login } from './Login/Login';

import { Link } from "react-router-dom";
import { Layout,Row, Col, Button, Menu} from 'antd';
import { BrowserRouter as Router } from "react-router-dom";
const {  Content } = Layout;


export const Auth = () => {
  return (
    <Layout className="auth-content">
    <Content className="contentent-custom">
        <Col span={24}>
        <Router>
          <Login/>
    </Router>
        </Col>
    </Content>
  </Layout>
        
  );
}