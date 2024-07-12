import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [isFrench, setIsFrench] = useState(false);

  const toggleLanguage = () => {
    setIsFrench(!isFrench);
  };

  const text = isFrench
    ? "Bienvenue sur Bookbabble, votre destination en ligne pour les livres hebdomadaires qui suscitent des discussions passionnantes. Chaque semaine, nous présentons une sélection de livres stimulants dans notre section blog, où les lecteurs peuvent approfondir les critiques et partager leurs perspectives. Non seulement vous pouvez rester à jour avec les dernières tendances littéraires, mais vous pouvez également louer des livres directement depuis notre site. Pour ceux qui aiment discuter de leurs lectures préférées, nous offrons la possibilité de réserver des réunions virtuelles, vous permettant de vous connecter avec d'autres passionnés de livres et de participer à des conversations enrichissantes. Rejoignez notre communauté et découvrez la joie de lire et de partager sur Bookbabble."
    : "Welcome to Bookbabble, your online destination for weekly featured books that spark engaging discussions. Every week, we showcase a selection of thought-provoking books in our blog section, where readers can delve into in-depth critiques and share their perspectives. Not only can you stay updated with the latest literary trends, but you can also rent books directly from our site. For those who love discussing their favorite reads, we offer the option to book virtual meetings, allowing you to connect with fellow book enthusiasts and engage in enriching conversations. Join our community and experience the joy of reading and sharing at Bookbabble.";

  const heading = isFrench ? "À propos" : "About";

  return (
    <>
      <div className="button-container">
        <button 
          onClick={toggleLanguage} 
          className="btn language-toggle-btn" 
          aria-label={isFrench ? "Switch to English" : "Passer en français"}
        >
          {isFrench ? "EN" : "FR"}
        </button>
      </div>
      <section className="content-about container my-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 font-weight-bold">{heading}</h1>
            <p>{text}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <img 
              src="./pics/library.jpg" 
              alt="Library" 
              className="img-fluid" 
              aria-label="Image of a library" 
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;