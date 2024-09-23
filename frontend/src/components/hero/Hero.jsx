import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <>
        <span className="first-title">We Are Here To Help You With</span>
        <span className="phrase">Tax Resolutions</span>
        <p>
          Asset Asecenders is a hub where finacial bookeeping taxiation and
          advisory services are systematically collated to create competitve
          synergies
        </p>
        <button className="hero-btn">Schedule a call</button>
      </>
    </div>
  );
};

export default Hero;
