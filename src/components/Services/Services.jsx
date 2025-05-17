import React from "react";
import "./Services.css";
import {
  FaVideo,
  FaBroadcastTower,
  FaCalendarAlt,
  FaCamera,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    title: "Creative Video Production",
    icon: <FaVideo />,
    details: [
      "Feature & Short Film Production",
      "Documentary Filmmaking",
      "Commercial & Corporate Video Production",
      "Music Video Production",
      "Scriptwriting & Development",
    ],
  },
  {
    title: "Event Coverage",
    icon: <FaCalendarAlt />,
    details: [
      "Wedding Cinematography",
      "Concert & Festival Coverage",
      "Corporate & Conference Filming",
      "Behind-the-Scenes & Highlights Reels",
      "Interview & Testimonial Videos",
    ],
  },
  {
    title: "Live Streaming",
    icon: <FaBroadcastTower />,
    details: [
      "Live Event Streaming (YouTube, Facebook, Instagram, etc.)",
      "Multi-Camera Event Coverage",
      "Webinar & Virtual Conference Production",
      "Church Services & Special Event Streaming",
      "Sports & Performance Broadcasts",
    ],
  },
  {
    title: "Content Creation & Management",
    icon: <FaCamera />,
    details: [
      "Promotional & Branding Videos",
      "Social Media Reels & TikTok Content",
      "Product Photography & Videography",
      "Influencer & Personal Branding Videos",
    ],
  },
  {
    title: "Equipment Hiring",
    icon: <FaTools />,
    details: [
      "Professional Cameras & Lenses",
      "Lighting & Grip Equipment",
      "Audio Recording Gear (Microphones, Mixers)",
      "Drones & Stabilizers",
      "Editing Suites & Post-Production Workstations",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="services-container">
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <ul>
              {service.details.map((item, i) => (
                <li key={i}>
                  <FaCheckCircle className="check-icon" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
