import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import { FaUser } from "react-icons/fa";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div id="testimonials" className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <FaUser size={40} style={{ marginRight: "1rem" }} />
                <div>
                  <h3>Natsai & Tawanda</h3>
                  <span>Wedding Client</span>
                </div>
              </div>
              <p>
                "Heartsky Pictures captured our wedding day more beautifully
                than we could have imagined. Every glance, smile, and tear was
                perfectly preserved. The team was professional, warm, and truly
                invested in making our day unforgettable.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <FaUser size={40} style={{ marginRight: "1rem" }} />
                <div>
                  <h3>JayTee</h3>
                  <span>Music Artist</span>
                </div>
              </div>
              <p>
                "Working with Heartsky Pictures was an amazing experience. Their
                creativity and attention to detail made my music video stand
                out. They brought my vision to life with cinematic visuals and
                smooth execution. Highly recommend!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <FaUser size={40} style={{ marginRight: "1rem" }} />
                <div>
                  <h3>Tariro K</h3>
                  <span> Event/Baby Shower Client</span>
                </div>
              </div>
              <p>
                "I hired Heartsky for my baby shower, and the photos were
                stunning! The team was patient, friendly, and blended right in
                with the guests. They captured beautiful, candid moments I
                didn’t even notice on the day!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <FaUser size={40} style={{ marginRight: "1rem" }} />
                <div>
                  <h3>L. Sibanda</h3>
                  <span>Independent Filmmaker</span>
                </div>
              </div>
              <p>
                "As a filmmaker, I’m very particular about quality and
                storytelling. Heartsky Pictures exceeded my expectations. Their
                understanding of narrative, lighting, and sound elevated my
                documentary beyond what I envisioned."
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
