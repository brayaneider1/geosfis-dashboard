import React from 'react';
import { Menu } from 'antd';
import {
    UserOutline,
    VideoCameraOutline,
    UploadOutline,
} from '@ant-design/icons';
import { useHistory } from 'react-router';
import Logo from '../logo2.png';


export const SideNav = () => {
    const history = useHistory();

    const handleUserClick = () => {
        history.push('/list');
    }
    return (
        <div>
            <div style={{ height: "50%", display: 'flex', background: "#097cf8", margin: "16px" }}><img style={{ width: '100%' }} src={Logo} />
            </div>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
            >
                <Menu.Item key="1" icon={<VideoCameraOutline />}>
                    Preguntas
          </Menu.Item>
            </Menu>
        </div>
    );
}


