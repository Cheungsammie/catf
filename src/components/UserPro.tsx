import React, { useState, useEffect } from 'react';
import { Typography, Card, Row, Col, Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

interface Breed {
  name: string;
  isFavorited: boolean;
}

const initialBreeds: Breed[] = [
  { name: 'Turkish Van Cat', isFavorited: false },
  { name: 'Maine Coon', isFavorited: false },
  { name: 'Siamese', isFavorited: false },
  { name: 'Persian', isFavorited: false },
];

const UserPro: React.FC = () => {
  const [breeds, setBreeds] = useState<Breed[]>(initialBreeds);

  useEffect(() => {
    const savedBreeds = localStorage.getItem('favoriteBreeds');
    if (savedBreeds) {
      setBreeds(JSON.parse(savedBreeds));
    }
  }, []);

  const handleFavorite = (index: number) => {
    const updatedBreeds = [...breeds];
    updatedBreeds[index].isFavorited = !updatedBreeds[index].isFavorited;
    setBreeds(updatedBreeds);
    localStorage.setItem('favoriteBreeds', JSON.stringify(updatedBreeds));
  };

  return (
    <div>
      <Typography.Title level={2}>Welcome back!</Typography.Title>
      <Typography.Title level={4}>Favorite Cat Breeds</Typography.Title>
      <Row gutter={[16, 16]}>
        {breeds.map((breed, index) => (
          <Col key={breed.name} xs={24} sm={12} md={6}>
            <Card title={breed.name}>
              <Button
                type="text"
                icon={breed.isFavorited ? <HeartFilled /> : <HeartOutlined />}
                onClick={() => handleFavorite(index)}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UserPro;