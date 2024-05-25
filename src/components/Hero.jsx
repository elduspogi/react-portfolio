import React from 'react'
import Gradient from './Gradient'

const Hero = () => {
  return (
    <div className="hero container d-flex justify-content-center align-items-center vh-100 vw-100">
        <Gradient />

        <div className="row text-start">
          <div className="col-12">
            <h1>Hello, I am elduspogi69.</h1>
          </div>
          <div className="col-12">
            <p>I am a Full Stack Developer primarily focused on Backend Development.</p>
          </div>
        </div>
    </div>
  );
};

export default Hero;
