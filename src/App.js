import React from 'react';
import { Card } from 'antd';
import { Route, Routes } from 'react-router-dom';
import './App.css';

//*Custom Components
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Options from './components/Options/Options';
import Footer from './components/Footer/Footer';


function App() {
  return (
      <Card id='content-wrapper'>
        <Routes>
          <Route path='/options' element={<Options />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Footer />
          
        
      </Card>
  );
}

export default App;
