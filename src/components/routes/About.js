import React from 'react';
import FoodImage from '../FoodImage';
import Footer from '../Footer';
import Navbar from '../Navbar';

const About = () => {
  return (
    <div>
        <Navbar />
        <FoodImage heading='OUR MISSION ' text='Legendary Food, Legendary Service'/>
        <Footer />
    </div>
    )
};

export default About;
