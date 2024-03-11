import React, { useState, useEffect } from "react";
import "./AboutIran.css";
import attraction1 from "../Images/Iran/attraction1.webp";
import attraction2 from "../Images/Iran/attraction2.jpg";
import attraction3 from "../Images/Iran/attraction3.jpg";
import attraction4 from "../Images/Iran/attraction4.jpg";
import attraction5 from "../Images/Iran/attraction5.webp";

const AboutIran = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const attractionImages = [
    attraction1,
    attraction2,
    attraction3,
    attraction4,
    attraction5,
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % attractionImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [attractionImages.length]);

  return (
    <article className="about-iran-container">
      <img
        className="iran-banner-image"
        src="https://media.mehrnews.com/d/2015/06/23/3/1747127.jpg?ts=1486462047399"
        alt="operation room"
      />
      <div className="text-content">
        <h1>Cosmetic Surgery in Iran</h1>
        <p>
          Cosmetic surgery in Iran has become a sought-after choice for
          individuals seeking quality procedures at a fraction of the cost.
          Renowned for its affordability and skilled surgeons, Iran offers a
          compelling option for those considering aesthetic enhancements.
        </p>
        <h2>Cost-Effective Excellence:</h2>
        <p>
          Iran stands out as a cost-effective destination for cosmetic surgery
          without compromising on quality. Procedures, including facelifts,
          rhinoplasty, and breast augmentation, are attractively priced compared
          to Western countries, making Iran an appealing choice for
          budget-conscious patients.
        </p>
        <h2>Expert Surgeons:</h2>
        <p>
          Iranian cosmetic surgeons are known for their exceptional skills and
          training received from global institutions. Their expertise, combined
          with a commitment to personalized care, instills confidence and
          satisfaction in patients seeking reliable aesthetic enhancements.
        </p>
        <h2>Comprehensive Services:</h2>
        <p>
          Iran prioritizes medical tourism, providing comprehensive services
          beyond surgical procedures. Patients receive top-notch pre and
          post-operative care in modern, well-equipped facilities. The warm
          hospitality of the Iranian people further enhances the overall
          experience for medical tourists.
        </p>
        <h2>Cultural Richness and Dual Experience:</h2>
        <p>
          Beyond medical advantages, Iran's rich cultural heritage and diverse
          landscapes add to its appeal. Patients can blend their cosmetic
          journey with exploring historical sites, vibrant bazaars, and
          picturesque scenery, creating a unique and attractive dual experience.
        </p>
      </div>
      <div className="iran-images-container">
        {attractionImages.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt={`Iran Attractions ${index + 1}`}
              className={`iran-image-item ${
                currentSlide === index ? "active-attraction-image" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          );
        })}
      </div>
    </article>
  );
};

export default AboutIran;
