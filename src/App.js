import React from 'react';
import './App.css';

//*Custom Components
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <div id='content-wrapper'>
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
