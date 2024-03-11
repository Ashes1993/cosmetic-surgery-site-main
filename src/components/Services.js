import React, { useState, useEffect, useRef } from "react";
import "./Services.css";
import consultationImg from "../Images/Services/Consultation.jpg";
import visaImg from "../Images/Services/Visa.jpg";
import accommodationImg from "../Images/Services/Accommodation.jpg";
import transportationImg from "../Images/Services/Transportation.avif";
import supportImg from "../Images/Services/Support.jpg";

const Services = () => {
  const servicesRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(handleScroll, options);

    const currentRef = servicesRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const servicesArray = [
    {
      serviceName: "Consultation",
      serviceTitle: "Consultation with the Very Best Surgeons",
      textClass: "translate-left",
      description:
        "Personalized consultations with highly experienced surgeons to guide you through your cosmetic journey.",
      imgClass: "translate-right",
      imgSrc: consultationImg,
      isFirstText: true,
    },
    {
      serviceName: "Visa",
      serviceTitle: "Visa and Ticket Assistance",
      textClass: "translate-right",
      description:
        "Seamless support for visa applications and travel planning to ensure a stress-free journey.",
      imgClass: "translate-left",
      imgSrc: visaImg,
      isFirstText: false,
    },
    {
      serviceName: "Accommodations",
      serviceTitle: "Comfortable Accommodations",
      textClass: "translate-left",
      description:
        "Relax in carefully selected accommodations designed for your comfort and well-being.",
      imgClass: "translate-right",
      imgSrc: accommodationImg,
      isFirstText: true,
    },
    {
      serviceName: "Transportation",
      serviceTitle: "Effortless Transportation",
      textClass: "translate-right",
      description:
        "We arrange transportation for your convenience, making your journey convenient and smooth.",
      imgClass: "translate-left",
      imgSrc: transportationImg,
      isFirstText: false,
    },
    {
      serviceName: "Support",
      serviceTitle: "Support Throughout the Entire Trip",
      textClass: "translate-left",
      description:
        "We stand by you throughout your entire cosmetic journey, offering unwavering support and assistance.",
      imgClass: "translate-right",
      imgSrc: supportImg,
      isFirstText: true,
    },
  ];

  return (
    <section className="services-list" ref={servicesRef}>
      <hr className="services-line" />
      <h1>Services</h1>

      {servicesArray.map((service, index) => {
        const {
          serviceName,
          serviceTitle,
          textClass,
          description,
          imgClass,
          imgSrc,
          isFirstText,
        } = service;
        return (
          <div className="service-item" key={index}>
            {!isFirstText && (
              <img
                className={`${imgClass} ${isVisible && "order"}`}
                src={imgSrc}
                alt={serviceName}
              />
            )}

            <div
              className={`service-details ${textClass} ${isVisible && "order"}`}
            >
              <h3>{serviceTitle}</h3>
              <p>{description}</p>
            </div>
            {isFirstText && (
              <img
                className={`${imgClass} ${isVisible && "order"}`}
                src={imgSrc}
                alt={serviceName}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Services;
