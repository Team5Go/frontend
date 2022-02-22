import React from 'react';
import '../App.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSeachLocation, FaSearchLocation, FaTractor, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                <div>
                    <h4 className='logo'>LOCATION</h4>
                    <p>19 Stonegate Center</p>
                    <h4>Valley Park, MO</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} /> 1-737-828-7268</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}} />team5@restaurant.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4 className='about'>About the restaurant</h4>
                <p>When’s the last time you remember eating a really great dish that left you thinking WOW. 
                   If that question left your mind empty and your mouth watering, it’s time to check out 
                   "Team5 restaurant", the hottest new Mediterranean food in town.
                   We focus in serving the best, freshest, tastiest food. </p>
                    <div className='social'>
                        <a href ='https://www.facebook.com/' rel="noopener noreferrer" target={"_blank"}><FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}} /></a>
                        <a href ='https://twitter.com/explore' rel="noopener noreferrer" target={"_blank"}> <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}} /></a>
                        <a href='https://www.linkedin.com' rel="noopener noreferrer" target={"_blank"}><FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}} /></a>
                    </div>
            </div>
        </div>

    </div>
  )
};

export default Footer;
