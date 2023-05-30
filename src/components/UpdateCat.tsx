import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { api } from './common/http-common';
import { useLocation } from 'react-router-dom';

const UpdateCat = (props) => {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cat_id }  = useLocation().state;

useEffect(() => {
  axios.get(`${api.url}/cat/${cat_id}`).then((res) => {
    setCat(res.data);
    setLoading(false);
  });
}, [cat_id]);

  const onFinish = (values) => {
    const datas ={...values,cat_id:cat_id};
    axios
      .put(`${api.url}/cat/${cat_id}`, datas )
      .then((res) => {
        console.log(res);
           message.success('Cat updated successfully!');
        // Navigate back to the cat list page
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{
          cat_name: cat.cat_name,
          age: cat.age,
          breed: cat.breed,
          image_url: cat.image_url,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Cat Name"
          name="cat_name"
          rules={[{ required: true, message: 'Please input the cat name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: 'Please input the age!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Breed"
          name="breed"
          rules={[{ required: true, message: 'Please input the breed!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Image URL"
          name="image_url"
          rules={[{ required: true, message: 'Please input the image URL!' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: 'Please input the gender.' }]}
        >
          <Input />
          
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
        
      </Form>
    );
  }
};

export default UpdateCat;