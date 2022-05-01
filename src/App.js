import React from 'react';
import { Card } from 'antd';
import './App.css';

//*Custom Components
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Card id='content-wrapper'>
        <HomePage />
      </Card>
    </div>
  );
}

export default App;
