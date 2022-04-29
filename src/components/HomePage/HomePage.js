import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './HomePage.css'

const ACCESS_KEY = 'VBhpjRajlNtDYginto40moaV5RhhtJ7wZ7HndOTJZww';

function HomePage() {
  const [ image, setImage ] = useState({});

  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&query=health&orientation=landscape`)
      .then(res => {
        setImage(res.data.urls.regular)
      })
      .catch(err => {
        console.error(err)
      })
  }, []);

  return (
    <div className='homePage '>
      <img className='home-image card container' src={image} alt='HomeImage' />
      <p>Motivation for a better Fit Behavior.</p>
      <button>Click here</button>
    </div>
  );
};

export default HomePage;