import React, { useEffect, useState } from "react";
import "./Anatomy.css";
import FBA from "../Images/anatomy(double).jpg";
import { Link } from "react-router-dom";
import breastAnatomy from "../Images/BreastAnatomy.png";
import faceAnatomy from "../Images/FaceAnatomy.png";
import bodyAnatomy from "../Images/BodyAnatomy.png";
import otherProcedures from "../Images/OtherProcedures.png";

const Anatomy = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 800);
  const [isOpenHair, setIsOpenHair] = useState(false);
  const [isOpenEyes, setIsOpenEyes] = useState(false);
  const [isOpenNose, setIsOpenNose] = useState(false);
  const [isOpenFace, setIsOpenFace] = useState(false);
  const [isOpenArm, setIsOpenArm] = useState(false);
  const [isOpenBreast, setIsOpenBreast] = useState(false);
  const [isOpenAb, setIsOpenAb] = useState(false);
  const [isOpenButt, setIsOpenButt] = useState(false);
  const [isOpenSides, setIsOpenSides] = useState(false);
  const [isOpenThigh, setIsOpenThigh] = useState(false);

  const [isShowHair, setIsShowHair] = useState(true);
  const [isShowEyes, setIsShowEyes] = useState(true);
  const [isShowNose, setIsShowNose] = useState(true);
  const [isShowFace, setIsShowFace] = useState(true);
  const [isShowArm, setIsShowArm] = useState(true);
  const [isShowBreast, setIsShowBreast] = useState(true);
  const [isShowAb, setIsShowAb] = useState(true);
  const [isShowButt, setIsShowButt] = useState(true);
  const [isShowSides, setIsShowSides] = useState(true);
  const [isShowThigh, setIsShowThigh] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bodyPartHandler = (bodyPart) => {
    const allStates = [
      isShowHair,
      isShowEyes,
      isShowNose,
      isShowFace,
      isShowArm,
      isShowBreast,
      isShowAb,
      isShowButt,
      isShowSides,
      isShowThigh,
    ];

    setIsOpenHair(false);
    setIsOpenEyes(false);
    setIsOpenNose(false);
    setIsOpenFace(false);
    setIsOpenArm(false);
    setIsOpenBreast(false);
    setIsOpenAb(false);
    setIsOpenButt(false);
    setIsOpenSides(false);
    setIsOpenThigh(false);

    setIsShowHair(false);
    setIsShowEyes(false);
    setIsShowNose(false);
    setIsShowFace(false);
    setIsShowArm(false);
    setIsShowBreast(false);
    setIsShowAb(false);
    setIsShowButt(false);
    setIsShowSides(false);
    setIsShowThigh(false);

    switch (bodyPart) {
      case "hair":
        setIsOpenHair(!isOpenHair);
        setIsShowHair(true);
        break;
      case "nose":
        setIsOpenNose(!isOpenNose);
        setIsShowNose(true);
        break;
      case "eyes":
        setIsOpenEyes(!isOpenEyes);
        setIsShowEyes(true);
        break;
      case "face":
        setIsOpenFace(!isOpenFace);
        setIsShowFace(true);
        break;
      case "arm":
        setIsOpenArm(!isOpenArm);
        setIsShowArm(true);
        break;
      case "breast":
        setIsOpenBreast(!isOpenBreast);
        setIsShowBreast(true);
        break;
      case "ab":
        setIsOpenAb(!isOpenAb);
        setIsShowAb(true);
        break;
      case "butt":
        setIsOpenButt(!isOpenButt);
        setIsShowButt(true);
        break;
      case "sides":
        setIsOpenSides(!isOpenSides);
        setIsShowSides(true);
        break;
      case "thigh":
        setIsOpenThigh(!isOpenThigh);
        setIsShowThigh(true);
        break;
      default:
        break;
    }

    if (allStates.some((state) => !state)) {
      setIsShowHair(true);
      setIsShowEyes(true);
      setIsShowNose(true);
      setIsShowFace(true);
      setIsShowArm(true);
      setIsShowBreast(true);
      setIsShowAb(true);
      setIsShowButt(true);
      setIsShowSides(true);
      setIsShowThigh(true);
    }
  };

  const bodyParts = [
    {
      name: "hair",
      beforeArrow: true,
      afterArrow: true,
      showFunction: isShowHair,
      openFunction: isOpenHair,
      description: "Surgeries like Hair Transplant, Hair Restoration and etc.",
      leftPos: "22%",
    },
    {
      name: "eyes",
      beforeArrow: true,
      afterArrow: false,
      showFunction: isShowEyes,
      openFunction: isOpenEyes,
      description: "Surgeries like Blepharoplasty, Double Eyelid and etc.",
      leftPos: "37%",
    },
    {
      name: "nose",
      beforeArrow: true,
      afterArrow: false,
      showFunction: isShowNose,
      openFunction: isOpenNose,
      description: "Surgeries like Rhinoplasty, Septoplasty and etc.",
      leftPos: "41%",
    },
    {
      name: "face",
      beforeArrow: true,
      afterArrow: false,
      showFunction: isShowFace,
      openFunction: isOpenFace,
      description: "Surgeries like FaceLift, Botox Injections and etc.",
      leftPos: "39%",
    },
    {
      name: "arm",
      beforeArrow: true,
      afterArrow: true,
      showFunction: isShowArm,
      openFunction: isOpenArm,
      description: "Surgeries like Brachioplasty and etc.",
      leftPos: "15%",
    },
    {
      name: "breast",
      beforeArrow: true,
      afterArrow: false,
      showFunction: isShowBreast,
      openFunction: isOpenBreast,
      description:
        "Surgeries like Breast Augmentation, Breast Reduction, Breast Lift and etc.",
      leftPos: "33%",
    },
    {
      name: "sides",
      beforeArrow: true,
      afterArrow: true,
      showFunction: isShowSides,
      openFunction: isOpenSides,
      description: "Surgeries like Liposuction and etc.",
      leftPos: "20%",
    },
    {
      name: "ab",
      beforeArrow: true,
      afterArrow: false,
      showFunction: isShowAb,
      openFunction: isOpenAb,
      description: "Surgeries like Liposuction, Abdominoplasty and etc.",
      leftPos: "41%",
    },
    {
      name: "butt",
      beforeArrow: false,
      afterArrow: true,
      showFunction: isShowButt,
      openFunction: isOpenButt,
      description: "Surgeries like Brazilian Butt Lift, Butt Implant and etc.",
      leftPos: "-40%",
    },
    {
      name: "thigh",
      beforeArrow: true,
      afterArrow: true,
      showFunction: isShowThigh,
      openFunction: isOpenThigh,
      description: "Surgeries like Thigh Lift and etc.",
      leftPos: "17%",
    },
  ];

  const mobileBodyParts = [
    {
      name: "Breast",
      image: breastAnatomy,
      listItems: [
        "Breast Augmentation",
        "Breast Lift",
        "Breast Reduction",
        "etc",
      ],
    },
    {
      name: "Head",
      image: faceAnatomy,
      listItems: [
        "Hair Transplant",
        "Double Eyelid",
        "Blepharoplasty",
        "Rhinoplasty",
        "etc",
      ],
    },
    {
      name: "Body",
      image: bodyAnatomy,
      listItems: ["Liposuction", "Abdominoplasty", "Butt Implant", "etc"],
    },
    {
      name: "Other (inc. Non-Surgical)",
      image: otherProcedures,
      listItems: ["Botox Injections", "etc"],
    },
  ];

  return (
    <section className="anatomy-container">
      <hr className="line" />
      <h1 className="">Surgeries</h1>
      {isMobileView ? (
        <div className="mobile-anatomy-container">
          {mobileBodyParts.map((bodyPart, index) => {
            const { name, image, listItems } = bodyPart;
            return (
              <div key={index} className="moblie-anatomy-card">
                <img
                  className="mobile-anatomy-image"
                  src={image}
                  alt={`anatomy-${name}`}
                />
                <h3>{name}</h3>
                <ul className="anatomy-list-items">
                  {listItems.map((listItem, index) => {
                    return <li key={index}>{listItem}</li>;
                  })}
                </ul>
              </div>
            );
          })}
          <Link to={"/surgeries"}>
            <button className="read-more-btn">Read More</button>
          </Link>
        </div>
      ) : (
        <div>
          <img
            className="anatomy-image"
            src={FBA}
            alt="body part surgeries"
            onClick={() => bodyPartHandler("")}
          />
          <div className="body-parts-container">
            {bodyParts.map((bodyPart, index) => {
              const {
                name,
                beforeArrow,
                afterArrow,
                showFunction,
                openFunction,
                description,
                leftPos,
              } = bodyPart;
              return (
                <div
                  key={index}
                  className={`body-part ${name} ${!showFunction ? "hide" : ""}`}
                >
                  {beforeArrow && <div className="arrow"></div>}
                  <h3
                    className="body-part__name"
                    onClick={() => bodyPartHandler(name)}
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </h3>
                  <p
                    style={{ left: leftPos }}
                    className={`body-summary ${openFunction && "show"}`}
                  >
                    {description}
                    <br />

                    <Link to={"/surgeries"}>
                      <button>Read More</button>
                    </Link>
                  </p>
                  {afterArrow && <div className="arrow"></div>}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Anatomy;
