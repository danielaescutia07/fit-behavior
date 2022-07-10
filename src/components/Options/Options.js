import React from 'react'
import { Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './Options.css';

function Options() {

  return (
    <Row>
      <Col span={24} className='options-wrapper'>
        <div className='options-card recipes'>
          <Button className='options-button'>View Recipes</Button>
        </div>
        <div className='options-card workouts'>
          <Button className='options-button'>View Workouts</Button>
        </div>
        <div className='options-card playlist'>
          <Button className='options-button'>View Playlists</Button>
        </div>
      </Col>
    </Row>
  );
};

export default Options;