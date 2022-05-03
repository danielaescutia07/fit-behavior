import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col } from 'antd';
import Header from '../Header/Header';
import './HomePage.css'

const imageMsg = process.env.REACT_APP_IMG_MSG;
const accessKey = process.env.REACT_APP_ACCESS_KEY;

function HomePage() {
  const [ image, setImage ] = useState({});

  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/ObpCE_X3j6U?client_id=${accessKey}`)
      .then(res => {
        setImage(res.data.urls.regular)
      })
      .catch(err => {
        console.error(err)
      })
  }, []);

  const navigate = useNavigate();

  const routeTo = (page) => {
    navigate(page);
  };

  return (
      <Row className='home-wrapper'>
        <Header />
        <Col className='img-col'>
          <img className='home-image' src={image} alt={imageMsg} />
        </Col>
        <Col className='col-row'>
          <Button onClick={() => routeTo('/options')} className='home-button'>Get Fit!</Button>
          <Button onClick={() => routeTo('/about')} className='home-button'>About</Button>
        </Col>
      </Row>
  );
};

export default HomePage;