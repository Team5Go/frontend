import React, { Component } from 'react';
import '../App.css'

class FoodImage extends Component {
  render() {
    return (
    <div className='food-img'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>

    </div>
    )
  }
}

export default FoodImage;
