import React from 'react';
import cat from './data/Cat.json';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
const DetailArticle = (props) => {
 const { aid } = useParams();
 const navigate = useNavigate();
 for(const Cat of Cat) {
 if(cat.id==aid) {
 return(
 <>
 <h1>i{Cat.title}</h1>
 <p>{Cat.fullText}</p>
 <Button type="primary" icon={<RollbackOutlined />}
onClick={()=>navigate(-1)} />
 </>
 );
 }
 }
}
export default DetailArticle;