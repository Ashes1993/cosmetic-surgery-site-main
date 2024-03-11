import React, { useEffect } from "react";
import "./Surgeries.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import LandingContacts from "../components/LandingContacts";
import Header from "../components/UI/Header";

const Surgeries = ({ articlesData }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Navbar />
      <Header>Surgeries</Header>
      <main className="surgeries-container">
        <div className="cards-container">
          {articlesData.map((article, index) => {
            const { id, cardTitle, cardImage } = article;
            return (
              <article key={index} className="card">
                <Link to={`/surgeries/${id}`}>
                  <img
                    className="surgery-image"
                    src={cardImage}
                    alt={cardTitle}
                  />
                  <h2 className="card-title">{cardTitle}</h2>
                </Link>
              </article>
            );
          })}
        </div>
      </main>
      <LandingContacts />
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Surgeries;
