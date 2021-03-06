
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import './home.css'


class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>

                <Content style={{ padding: '24px 50px' }}>
                     <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                     Ant Design ©2016 Created by Ant UED
                </Footer>
          </Layout>
        )
    }
}

export default HomeContainer


