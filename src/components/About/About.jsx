import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
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
        <h2>Nurturing the Future of Education</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          blanditiis officiis sed obcaecati doloribus impedit, distinctio sint
          commodi magnam, quam enim dolor? Distinctio et ipsum esse ex
          voluptatem officiis sint!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores,
          mollitia nemo. Saepe architecto necessitatibus nihil quibusdam
          consequatur laudantium aspernatur ab beatae non quasi. Labore maiores
          quas provident beatae laboriosam! Asperiores.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          molestias ullam velit natus eveniet placeat, ducimus, ipsum dolore
          officiis, mollitia minima corporis maiores provident. Aliquid optio
          eaque eum dolor unde!
        </p>
      </div>
    </div>
  );
};

export default About;
