import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col } from 'antd';
import Header from '../Header/Header';
import 'antd/dist/antd.css';
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
        <Col span={10} className='col-row'>
          <Header />
          <p className='description'>Staying fit should not be complicated. Fit Behavior provides options to choose from. Search for the perfect meal, workout and/or playlist. </p>
          <div className='button-div'>
            <Button size='large' ghost onClick={() => routeTo('/options')} className='home-button'>Get Fit!</Button>
            <Button size='large' ghost onClick={() => routeTo('/about')} className='home-button'>About</Button>
          </div>
          
        </Col>
        <Col span={14} className='image-container'>
          <img className='home-image' src={image} alt={imageMsg} />
        </Col>
        
      </Row>
  );
};

export default HomePage;