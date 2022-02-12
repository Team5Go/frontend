import React from 'react';
import '../App.css'

const Form = () => {
  return (
    <div className='form'>
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
    </div>
  )
};

export default Form;
