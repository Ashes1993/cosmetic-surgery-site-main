import React from "react";
import "./AboutUs.css";
import aboutUsImg from "../Images/aboutUs.jpg";
import SlowText from "./SlowText";

const AboutUs = () => {
  return (
    <article className="aboutus-container">
      <p className="aboutus-text">
        At <SlowText text={"[Company Name]"} speed={150} /> <br />
        We're your friendly companions on your journey to beauty and confidence!
        Our team, loaded with experience, is here for you every step of the
        way—starting from your first chat with us to waving goodbye
        post-treatment. We've got all the details sorted: beauty consultations,
        visa magic, flight plans, cozy stays, getting you to the doctor's chair,
        and ensuring you're pampered during recovery. Your cosmetic adventure
        should be stress-free, and we've got your back! Ready to make your
        beauty dreams come true with a sprinkle of fun? Let's do it together at
        [Company Name]!
      </p>
      <img src={aboutUsImg} alt="About Us" />
    </article>
  );
};

export default AboutUs;
