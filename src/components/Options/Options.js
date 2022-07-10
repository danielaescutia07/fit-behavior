import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './Options.css';

function Options() {

  const navigate = useNavigate();

  const routeTo = (page) => {
    navigate(page);
  };

  return (
    <Row className='row-wrapper'>
      
      <Col span={24} className='options-wrapper'>
        <div className='options-card recipes' onClick={() => routeTo('/recipes')}>
        </div>
        <div className='options-card workouts' onClick={() => routeTo('/workouts')}>
        </div>
        <div className='options-card playlist' onClick={() => routeTo('/playlists')}>
        </div>
      </Col>
      <Col span={24}>
        <h3 className='options-heading'>Select an Option</h3>
      </Col>
    </Row>
  );
};

export default Options;