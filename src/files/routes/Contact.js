import React from 'react';
import FoodImage from '../FoodImage';
import Navbar from '../Navbar';
import Form from '../Form'
import Footer from '../Footer';

const Contact = () => {
  return (
    <div>
        <Navbar />
        <FoodImage heading='CONTACT.' text='Contact Restaurant' />
        <Form />
        <Footer />
    </div>
  )
};

export default Contact;
