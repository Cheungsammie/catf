import React from 'react';
import { Typography, Row, Col, Image, List } from 'antd';

const { Title } = Typography;

const About: React.FC = () => {
  const centers = [
    {
      name: 'Causeway Bay Centre',
      address: '521 Hennessy Road, Causeway Bay, Hong Kong',
      tel: '28381211',
    },
    {
      name: 'Mong Kok Centre',
      address: '2C Hamilton St, Mong Kok, Hong Kong',
      tel: '28381212',
    },
  ];

  return (
    <div>
      <Row justify="center" align="middle" style={{ height: '100vh' }}>
        <Col span={12} style={{ textAlign: 'center' }}>
          <Title level={1}>Welcome to our Cat Shelter</Title>
          <Title level={3}>
            Welcome to our cat shelter! We are a dedicated team of animal lovers who are passionate about rescuing and rehoming cats in need. Our mission is to provide a safe and nurturing environment for cats while they await their forever homes.
          </Title>
          <Title level={3}>
            At our shelter, we take in cats of all ages, breeds, and backgrounds. Each cat is carefully assessed and given the individualcare and attention they need to thrive. We believe that every cat deserves a second chance, and we work tirelessly to find loving, responsible homes for all of our feline friends.
          </Title>
          <Title level={3}>
            Whether you're looking to adopt a cat, volunteer your time, or simply support our cause, we welcome you to our shelter. With your help, we can continue to provide a safe haven for cats in need and make a positive difference in the lives of felines everywhere.
          </Title>
          <List
            header={<Title level={3}>Our Centers</Title>}
            dataSource={centers}
            renderItem={(center) => (
              <List.Item>
                <Title level={4}>{center.name}</Title>
                <p>{center.address}</p>
                <p>Tel: {center.tel}</p>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default About;