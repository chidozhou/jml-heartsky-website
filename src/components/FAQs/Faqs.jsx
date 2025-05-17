import React, { useState } from "react";
import "./Faqs.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What services does your film production company offer?",
    answer:
      "We offer creative video production, event coverage, live streaming, content creation & management, and equipment hiring.",
  },
  {
    question: "Can you handle live event streaming on social media?",
    answer:
      "Yes, we provide professional live streaming services for platforms like YouTube, Facebook, Instagram, and more.",
  },
  {
    question: "Do you offer equipment rental separately?",
    answer:
      "Absolutely! You can hire cameras, lighting, audio gear, drones, and editing suites based on your project needs.",
  },
  {
    question: "Do you cover weddings and private events?",
    answer:
      "Yes, we specialize in wedding cinematography and coverage for personal, corporate, and cultural events.",
  },
  {
    question: "How can I get a quote or make a booking?",
    answer:
      "Simply fill out our contact form or email us at info@jmlheartsky.com with your project details.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="FAQs" className="faq-page">
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              {activeIndex === index ? (
                <FaChevronUp className="icon" />
              ) : (
                <FaChevronDown className="icon" />
              )}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
