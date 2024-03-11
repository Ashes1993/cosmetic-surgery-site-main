import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SurgeryDetailPage.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollToTopButton";
import LandingContacts from "../components/LandingContacts";
import { Link } from "react-router-dom";

const SurgeryDetailPage = ({ articlesData }) => {
  const { surgeryId } = useParams();
  const article = articlesData.find((article) => article.id === surgeryId);

  const [bannerImage, setBannerImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    import(`../Images/Surgeries/${article.bannerImg}`)
      .then((image) => setBannerImage(image.default))
      .catch((error) => console.error("Error loading banner image:", error));
  }, [article]);

  if (!article || !bannerImage) {
    return <div>Article not found or banner image loading...</div>;
  }

  return (
    <div className="page-container">
      <Navbar />
      <main className="article-container">
        <header className="hero-section">
          <img src={bannerImage} alt={article.title} />
          <h1>{article.title}</h1>
        </header>

        {article.sections.map((section, index) => (
          <article key={index} className="article-section">
            <h2 className="section-title">{section.title}</h2>
            {section.isList ? (
              <ul className="custom-list">
                {section.listItems.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{section.content}</p>
            )}

            {section.sections && (
              <div>
                {section.sections.map((subSection, subIndex) => (
                  <div key={subIndex} className="sub-section">
                    <h3 className="sub-section-title">{subSection.title}</h3>
                    {subSection.isList ? (
                      <ul className="custom-list">
                        {subSection.listItems.map((subItem, subItemIndex) => (
                          <li key={subItemIndex}>{subItem}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{subSection.content}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}

        <section className="cta-section">
          <h2>Considering Cosmetic Surgery in Iran?</h2>
          <p>
            Explore our services and take the first step towards restoring your
            confidence. Contact us for personalized advice and consultations.
          </p>
          <Link to={"/contact-us"} className="cta-button">
            Contact Us
          </Link>
        </section>
      </main>
      <LandingContacts />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};
export default SurgeryDetailPage;
