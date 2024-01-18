import React, { useContext } from 'react'
import { AutoComplete, Button, Cascader, Checkbox, Col, Form, Input, message, Row, Select, } from 'antd';
import { AppContext } from '../AppContext';
import { useState } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
};

const Register = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const { saveNewUserToLocal } = useContext(AppContext)
  const onFinish = (values) => {
    console.log("dsadasd")
    for (let key of Object.keys(values)) {
      values[key].trim()
    }

    let ListUser = []
    if (localStorage.getItem('ListUser')) {
      ListUser = JSON.parse(localStorage.getItem('ListUser'))
    }
    const accountExits = ListUser?.find((e, i) => {
      return e.username === values.username
    })
    if (accountExits) {
      message.error("Username is already exist")
      return
    }
    console.log({ values })
    saveNewUserToLocal(values)
    message.success('Registration successful!');
    navigate('/')
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <div className='flex flex-col justify-center items-center h-[600px] mt-[50px]'>
      <h1 className='text-[1.7em]'>SIGN UP</h1>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: '86',
        }}
        style={{
          maxWidth: 1000,
        }}
        id="formRegister"
      >
        <Form.Item
          name="firstName"
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input placeholder='First name' />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[
            {
              type: 'Last name',
              message: 'The input is not valid Last name!',
            },
            {
              required: true,
              message: 'Please input your Last name!',
            },
          ]}
        >
          <Input placeholder='Last name' />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[
            {
              type: 'Username',
              message: 'The input is not valid Username!',
            },
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input placeholder='Username' />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder='Email' />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder='Password' />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder='Confirm password' />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
            placeholder='0123456789'
          />
        </Form.Item>

        <Button className='bg-[#010101] text-[#fff] w-[100%]' key="submit" type="primary" htmlType="submit" form="formRegister">SIGN UP</Button>
        <div className='flex justify-between items-center my-2 text-[16px]'>
          <p>Already have an account?</p>
          <Link to="/login">
            Sign in
          </Link>
        </div>

      </Form>
    </div>
  )
}

export default Register