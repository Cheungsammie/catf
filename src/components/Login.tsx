import React, { useState, useEffect, useRef } from 'react'; 
import { Form, Input, Button, Alert } from 'antd';
import axios from 'axios';
import {api} from './common/http-common';

interface LoginProps {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const Login: React.FC<LoginProps> = ({ setUsername, setPassword }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (values: { username: string, password: string }) => {
    setIsLoading(true);
    setError('');

    try {
      // Send a POST request to the API endpoint with the username and password in Basic Authentication headers
        console.log(values.username+values.password)
      const response = await axios.get(`${api.url}/login/private`, {
        auth: {
         username: values.username,
          password: values.password,
        },
      });
      sessionStorage.setItem('userId', response.data.id);
      sessionStorage.setItem('username', response.data.username);
      sessionStorage.setItem('email', response.data.email);
      sessionStorage.setItem('role', response.data.role);
      console.log(response.data); // Output: the response data from the API, which may include an access token or other information
    } catch (error) {
      // Handle any errors that occurred during the API request
      console.error(error);
      setError('Invalid username or password');
    }

    setIsLoading(false);
  };

  return (
    <Form onFinish={handleSubmit}>
         <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input onChange={(event) => setUsername(event.target.value)} />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password onChange={(event) => setPassword(event.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          {isLoading ? 'Logging in...' : 'Log In'}
        </Button>
      </Form.Item>
      {error && <Alert message={error} type="error" />}
    </Form>
  );
};

export default Login;