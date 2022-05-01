import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button, Row, Col } from 'antd';
import './HomePage.css'

const imageMsg = 'Oops! Something went wrong...'
const ACCESS_KEY = 'VBhpjRajlNtDYginto40moaV5RhhtJ7wZ7HndOTJZww';

function HomePage() {
  const [ image, setImage ] = useState({});

  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/ObpCE_X3j6U?client_id=${ACCESS_KEY}`)
      .then(res => {
        setImage(res.data.urls.regular)
      })
      .catch(err => {
        console.error(err)
      })
  }, []);

  return (
      <Row className='home-wrapper'>
        <Col className='col-row'>
          <h1 id='heading'>Fit Behavior</h1>
        </Col>
        <Col className='col-row'>
          <img className='home-image' src={image} alt={imageMsg} />
        </Col>
        <Col className='col-row'>
          <Button className='home-button'>Get Fit!</Button>
        </Col>
      </Row>
  );
};

export default HomePage;