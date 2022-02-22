import React from 'react';
import FoodImage from '../FoodImage';
import Footer from '../Footer';
import Maps from '../Maps';
import Navbar from '../Navbar';

const About = () => {
  return (
    <div>
        <Navbar />
        <FoodImage heading='ABOUT US' />

        <section className="bg2-pattern p-t-116 p-b-110 t-center p-l-15 p-r-15">
    <span className="tit2 t-center">
    Team5 Restaurant
    </span>

    <h3 className="tit3 t-center m-b-35 m-t-5">
      Our Story
    </h3>

    <p className="t-center size32 m-l-r-auto">
          “Make amazing food – offer warm welcoming service – give back to the
           neighborhood – run an efficient, profitable business – make flour a 
           better place for both our customers and ourselves.
           We believe the choices we make about what we eat, 
           where it comes from and how it’s prepared have a direct and powerful
           impact on the health of individuals, communities and the environment.”
    </p>
  </section>
        <Maps />
        <Footer />
    </div>
    )
};

export default About;
