import React from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { api } from './common/http-common';

const { Option } = Select;

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  role: string;
}

const Signup = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: SignupFormValues) => {
    axios.post(`${api.url}/signup`, values)
      .then(() => {
        message.success('Sign up successful!');
        form.resetFields();
      })
      .catch((error) => {
        console.error(error);
        message.error('Failed to sign up');
      });
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please enter your email' }]}
      >
        <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      </Form.Item>
      <Form.Item
        name="role"
        rules={[{ required: true, message: 'Please select your role' }]}
      >
        <Select placeholder="Select your role">
          <Option value="admin">Staff</Option>
          <Option value="user">Member</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Signup;