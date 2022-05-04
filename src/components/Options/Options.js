import React from 'react'
import { Button, Row, Col, Card } from 'antd';
import './Options.css';

function Options() {

  return (
    <div>
    <Row>
      <Col className='options-wrapper'>
        <Card className='options-card'>
          <h3>Recipes</h3>
          <p className='options-description'>Consequat voluptate est dolor pariatur anim. Incididunt magna commodo irure qui eiusmod. Officia est aliqua incididunt nulla cillum culpa quis. Officia officia irure laborum labore. Officia aute culpa nulla qui elit fugiat consequat non deserunt sint in consectetur sint.</p>
          <Button className='options-button'>View Recipes</Button>
        </Card>
        <Card className='options-card'>
          <h3>Workouts</h3>
          <p className='options-description'>Consequat voluptate est dolor pariatur anim. Incididunt magna commodo irure qui eiusmod. Officia est aliqua incididunt nulla cillum culpa quis. Officia officia irure laborum labore. Officia aute culpa nulla qui elit fugiat consequat non deserunt sint in consectetur sint.</p>
          <Button className='options-button'>View Workouts</Button>
        </Card>
        <Card className='options-card'>
          <h3>Playlist</h3>
          <p className='options-description'>Consequat voluptate est dolor pariatur anim. Incididunt magna commodo irure qui eiusmod. Officia est aliqua incididunt nulla cillum culpa quis. Officia officia irure laborum labore. Officia aute culpa nulla qui elit fugiat consequat non deserunt sint in consectetur sint.</p>
          <Button className='options-button'>View Playlist</Button>
        </Card>
      </Col>
    </Row>
    <h2 className='options-heading'>Select from our options to accommodate your needs!</h2>
    </div>
  );
};

export default Options;