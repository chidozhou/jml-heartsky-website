import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Bringing Stories to Life, One Frame at a Time</h1>
        <p>
          HeartSky is a creative haven for storytellers and dreamers. We produce
          films that move hearts, spark ideas, and paint emotions across the
          screen with every scene we capture.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
