import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  UserOutlined,
  ShoppingOutlined,
  FileDoneOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Customers from './Customers';
import Order from './Order';
import Products from './Products';
const { Header, Sider, Content } = Layout;
const Admin = () => {
  const [selectedKey, setSelectedKey] = useState('1');

  const [collapsed, setCollapsed] = useState(false);
  const handleMenuClick = (key) => {
    setSelectedKey(key);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <ShoppingOutlined />,
              label: 'Products',
            },
            {
              key: '3',
              icon: <TeamOutlined />,
              label: 'Customers',
            },
            {
              key: '4',
              icon: <FileDoneOutlined />,
              label: 'Orders',
            },
          ]}
          onClick={({ key }) => handleMenuClick(key)}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
          }}
        >
          {selectedKey === '1' && <div>Content for Option 1</div>}
          {selectedKey === '2' && <Products />}
          {selectedKey === '3' && <Customers />}
          {selectedKey === '4' && <Order />}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Admin;