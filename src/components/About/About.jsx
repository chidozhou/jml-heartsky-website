import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
import play_icon from "../../assets/play-icon.png";
const About = ({ setPlayState }) => {
  return (
    <div id="about" className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Dream. Create. Inspire.</h2>

        <p>
          At Heartsky Pictures Ltd, we believe that every moment tells a story
          waiting to be captured. Founded by a passionate team of creatives, we
          specialize in professional video production and photography services
          that bring your unique vision to life.
        </p>
        <p>
          Whether it's a wedding, music video, documentary, or custom project,
          our dedicated team utilizes state-of-the-art equipment and innovative
          techniques to ensure that every frame is a work of art. We pride
          ourselves on our commitment to excellence, creativity, and customer
          satisfaction, working closely with our clients to understand their
          needs and deliver unforgettable visuals that resonate with audiences.
        </p>
        <p>
          Join us on a journey of storytelling through captivating imagery and
          let us help you immortalize your cherished moments.
        </p>
      </div>
    </div>
  );
};

export default About;
