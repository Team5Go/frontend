import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css'

import resVideo from '../assets/serving.mp4'

const Video = () => {
  return (
  <div className='trailer'>
      <video autoPlay loop muted id='video'>
          <source src={resVideo} type='video/mp4' />
      </video>

      <div className='content'>
          <h1>Restaurant. Meditarrenean.</h1>
          <h2>Good 🍽️food🍽️ is good 😎mood😎</h2>

      <div>
        <Link to='/reservation' className='btn'>Reservation</Link>
        <Link to='/menu' className='btn btn-light'>menu</Link>
      </div>
      </div>

  </div>
  )
};

export default Video;
