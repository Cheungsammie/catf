import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Button, Form, Select } from 'antd';
import axios from 'axios';
import { api } from './common/http-common';
import updateCat from './UpdateCat';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const Cat = () => {
  
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [catImages, setCatImages] = React.useState(null);
  const [filteredCatImages, setFilteredCatImages] = React.useState(null); // new state to hold filtered cat images
  const [filterForm] = Form.useForm(); // form instance for the filter input fields

  React.useEffect(() => {
    axios.get(api.url + "/cat").then((res) => {
      setCatImages(res.data);
      setFilteredCatImages(res.data); // initialize with all cat images
    }).then(() => {
      setLoading(false);
    })
  }, []);

  const handleUpdate = (cat_id) => {
    navigate(`/update/${cat_id}`, { state: { cat_id } });
  };

  const handleDelete = (cat_id) => {
    axios
      .delete(`${api.url}/cat/${cat_id}`)
      .then((res) => {
        setCatImages(catImages.filter((cat) => cat.cat_id !== cat_id));
        setFilteredCatImages(filteredCatImages.filter((cat) => cat.cat_id !== cat_id)); // also remove from filtered cat images
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFilter = (values) => {
    const { age, breed, gender } = values; // get filter values from form input fields

    // filter cat images based on filter values
    const filtered = catImages.filter((cat) => {
      return (!age || cat.age <= age) && (!breed || cat.breed === breed) && (!gender || cat.gender === gender);
    });

    setFilteredCatImages(filtered);
  };

  if (loading) {
    return (<p>Loading...</p>)
  } else {
    const breedOptions = [
      { value: 'Persian', label: 'Persian' },
      { value: 'Siamese', label: 'Siamese' },
      { value: 'Tabby', label: 'Tabby' },
      { value: 'Birman', label: 'Birman' },
      { value: 'Maine Coon', label: 'Maine Coon' },
      { value: 'American Shorthair', label: 'American Shorthair' },
      { value: 'Selkirk Rex', label: 'Selkirk Rex' },
      { value: 'Turkish Van', label: 'Turkish Van' },
    ];

    const genderOptions = [
      { value: 'female', label: 'female' },
      { value: 'male', label: 'male' },
    ];

    return (
      <>
        <Form layout="inline" form={filterForm} onFinish={handleFilter} style={{ marginBottom: '16px' }}>
          <Form.Item label="Age" name="age">
            <Select>
              <Option value="">All</Option>
              <Option value={1}>0-1 years</Option>
              <Option value={3}>1-3 years</Option>
              <Option value={5}>3-5 years</Option>
              <Option value={10}>5-10 years</Option>
              <Option value={30}>10+ years</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Breed" name="breed">
            <Select>
              <Option value="">All</Option>
              {breedOptions.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Select>
              <Option value="">All</Option>
              {genderOptions.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Filter</Button>
          </Form.Item>
        </Form>

        <Row justify="space-around">
          {filteredCatImages.slice(0, 9).map(({ cat_id, cat_name, age, image_url, breed, gender }) => (
            <Col span={8} key={cat_id}>
              <Card
                style={{ width: 300 }}
                actions={[
                  <Button type="primary" style={{ color: 'white' }} onClick={() => handleUpdate(cat_id)}>
                    Edit
                  </Button>,
                  <Button type="primary" danger onClick={() => handleDelete(cat_id)}>
                    Delete
                  </Button>,
                ]}
              >
                <img src={image_url} alt={cat_name} style={{ width: '100%', height: 'auto' }} />

                <p>Name: {cat_name}</p>
                <p>Age: {age}</p>
                <p>Breed: {breed}</p>
                <p>Gender: {gender}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
};

export default Cat;