import React, { useContext } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, message, Form, Input } from 'antd';
import { AppContext } from '../AppContext';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { stringify } from 'uuid';
const Login = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AppContext)
  const onFinish = ({ username, password }) => {
    if (username.trim() === "" || password.trim() === "") {
      message.error('Invalid username or password');
    }
    else {
      if (username === "admin" && password === "admin") {
        message.success('Hello Admin !');
        navigate('/Admin')
      }
      else{
        let ListUser = localStorage.getItem('ListUser')
        ListUser= JSON.parse(ListUser)
      
        const validAccount = ListUser?.find((e,index)=>{
          return username===e.username&&e.password 
        })
        if(validAccount){
          console.log(validAccount)
          localStorage.setItem('CurrentUser',JSON.stringify(validAccount))
          navigate('/')
          return
        }
        message.error("Invalid username or password")
      }
  }
};

return (
  <div className='flex flex-col justify-center items-center h-[500px]'>
    <h1 className='text-[1.7em]'>SIGN IN</h1>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      id="formLogin"
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Button key="submit" type="primary" htmlType="submit" form="formLogin" className='bg-[#010101] text-[#fff] w-[100%]'>SIGN IN</Button>
      <div className='flex justify-item items-center my-2 text-[16px]'>
        <p>Don’t have an account?</p>
        <Link to="/register">
          Sign up
        </Link>
      </div>
    </Form>
  </div>

)
}

export default Login
