import React from "react";
import "./Pricing.css";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "$499",
    description: "Ideal for small projects or events.",
    features: [
      "1-Day Video Shoot",
      "1 Camera Operator",
      "Basic Editing",
      "720p Final Video",
    ],
  },
  {
    name: "Professional",
    price: "$999",
    description: "Perfect for weddings, music videos & corporate events.",
    features: [
      "2-Day Video Shoot",
      "2 Camera Operators",
      "Advanced Editing + Color Grading",
      "1080p HD Video",
      "1 Revision",
    ],
  },
  {
    name: "Premium",
    price: "$1799",
    description: "Full-scale production with creative direction.",
    features: [
      "3+ Days Filming",
      "Creative Director + Full Crew",
      "Drone Coverage",
      "4K UHD Video",
      "Multiple Revisions",
    ],
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="pricing-section">
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <p className="desc">{plan.description}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <FaCheckCircle className="check-icon" /> {feature}
                </li>
              ))}
            </ul>
            {/* <button className="btn">Choose Plan</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
