import React from 'react';
import { Form, Input, Button, Select, Upload, Radio, message } from 'antd';
import { Cat } from './types';
import axios from 'axios';
import { api } from './common/http-common';
const { Option } = Select;
const RadioGroup = Radio.Group;

const NewCatForm = () => {
  const [form] = Form.useForm();  
  const handleSubmit = (values: Cat) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('age', String(values.age));
    formData.append('breed', values.breed);
    formData.append('dateOfBirth', values.dateOfBirth);
    formData.append('gender', values.gender);
    console.log(values)
    console.log(values.name)
    
    if (values.image && values.image[0]) {
      formData.append('image', values.image[0].originFileObj);
    }

    console.log(formData)
    axios.post(`${api.url}/cat`, values)
      .then(() => {
        message.success('Cat added successfully');
        form.resetFields();
      })
      .catch((error) => {
        console.error(error);
        message.error('Failed to add cat');
      });
  };
  
  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item
        name="cat_name"
        label="Name"
        rules={[{ required: true, message: 'Please input the cat name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
        rules={[{ required: true, min: 0, max: 30 }]}
      >
        <Input type="number" />
      </Form.Item> 
      <Form.Item name="breed" label="Breed">
        <Select>
          <Option value="persian">Persian</Option>
          <Option value="siamese">Siamese</Option>
          <Option value="tabby">Tabby</Option>
         <Option value="Birman">Birman</Option>
          <Option value="Maine Coon">Maine Coon</Option>
              <Option value="American Shorthair">American Shorthair </Option>
              <Option value="Selkirk Rex">Selkirk Rex </Option>
              <Option value="Turkish Van<">Turkish Van</Option>
          
          
        </Select>
      </Form.Item>
      <Form.Item name="date_created" label="Date of Created">
        <Input type="date" />
      </Form.Item>
          <Form.Item
        name="image_url"
        label="Photo"
        rules={[{ required: true, message: 'Please input the image url!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="gender" label="Gender">
        <RadioGroup>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </RadioGroup>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Cat
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewCatForm;