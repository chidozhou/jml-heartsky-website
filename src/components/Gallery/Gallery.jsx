import React from "react";
import Slider from "react-slick";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import person_1 from "../../assets/person1.jpg";
import person_2 from "../../assets/person2.jpg";
import person from "../../assets/person.jpg";
import person_4 from "../../assets/person4.jpg";
import person_5 from "../../assets/person5.jpg";
import person_6 from "../../assets/person6.jpg";
import person_7 from "../../assets/person7.jpg";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="campus" id="gallery">
      <Slider {...settings} className="gallery-slider">
        <div>
          <img src={person_2} alt="gallery 2" />
        </div>
        <div>
          <img src={person} alt="gallery 3" />
        </div>
        {/* <div>
          <img src={person_4} alt="gallery 4" />
        </div> */}
        <div>
          <img src={person_5} alt="gallery 4" />
        </div>
        <div>
          <img src={person_6} alt="gallery 4" />
        </div>
        <div>
          <img src={person_7} alt="gallery 4" />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
