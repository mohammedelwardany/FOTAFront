import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <>
    
    <Form

      name="normal_login"
      className="login-form LoginContainer"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
    <h1 className='orange-text'>Login</h1>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon orange-text" />} placeholder="Username" className='text-bold'/>
      </Form.Item>
      <Form.Item
        name="password"
        className='orange-text'
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon orange-text " />}
          type="password"
          placeholder="Password"
          className='text-bold'
        />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item> */}
    <br/>
      <Form.Item >
        <Button size='large' type="primary" htmlType="submit" className="login-form-button BtnStyle">
          Log in
        </Button>
        
      </Form.Item>
    </Form>
    </>
  );
};
export default LoginForm;