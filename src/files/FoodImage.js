import React, { Component } from 'react';
import '../App.css'

class FoodImage extends Component {
  render() {
    return (
    <div className='food-img'>
        <div className='heading'>
            <h1 className='tit6'>{this.props.heading}</h1>
        </div>

    </div>
    )
  }
}

export default FoodImage;
