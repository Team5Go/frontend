import React from 'react';
import FoodImage from '../FoodImage';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../App.css'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <FoodImage heading='CONTACT.' text='Contact Restaurant' />
        <form>
            <label>Your Name</label>
            <input placeholder='John Doe' type='text'></input>
            <label>Email</label>
            <input placeholder='food@gmail.com' type='email'></input>
            <label>Subject</label>
            <input placeholder='Supplier' type='text'></input>
            <label>Details</label>
            <textarea rows='3' placeholder='Type a short message here' />
            <button className='btn'>Submit</button>
        </form>
        <Footer />
    </div>
  )
};

export default Contact;
