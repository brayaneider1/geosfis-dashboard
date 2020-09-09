import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import List from "../../../components/ListEvent/ListEvent";
import Form from "../../../components/ListEvent/AddEvent";
import Edit from "../../../components/ListEvent/EditEvent";
import {SideNav} from "../../../components/sidebar";
import { Layout } from 'antd';
import {
    MenuUnfoldOutline,
    MenuFoldOutline
  } from '@ant-design/icons';

const { Header, Sider, Content} = Layout;
 const Private = () => {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
  }, []);

    const handleToggle = (event) => {
        event.preventDefault();
        collapse ? setCollapse(false) : setCollapse(true);
    }
  return (
      <Router >
        <Layout className="private-content">
          <Sider style={{background:'#097cf8'}} trigger={null} collapsible collapsed={collapse}>
            <SideNav />
          </Sider>
          <Layout>
            <Header className="content-header" style={{padding: 0, background: "#097cf8"}}>
                      {React.createElement(!collapse ? 'MenuUnfoldOutline' : 'MenuFoldOutline', {
                          className: 'trigger',
                          onClick: handleToggle,
                          style: {color: "#000"}
                      })}
                      <h1>Bienvenido docente</h1>
                      <span>Usuario</span>
            </Header>
              <Content style={{display:'flex',justifyContent:'center', margin: '24px 16px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff"}}>
                <Switch>
                    <Route path="/list" component={List} />
                    <Route path="/form" component={Form} />
                    <Route path="/edit" component={Edit} />

                </Switch>
              </Content>
          </Layout>
        </Layout>
    </Router>
  );
}

export default Private

