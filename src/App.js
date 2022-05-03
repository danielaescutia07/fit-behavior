import React from 'react';
import { Card } from 'antd';
import background from './images/background-img.jpeg';
import './App.css';

//*Custom Components
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`}} className="App">
      <Card id='content-wrapper'>
        <Header />
        <HomePage />
      </Card>
    </div>
  );
}

export default App;
