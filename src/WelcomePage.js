import React, { useState, useEffect } from "react";
import './App.css'; // Assure-toi d'inclure les styles CSS pour l'animation

const WelcomePage = ({ onEnter }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule un délai de 3 secondes avant de changer la page
    setTimeout(() => {
      setLoading(false); // Cache l'écran de chargement
      onEnter(); // Appelle la fonction pour changer la vue
    }, 3000); // Attendre 3 secondes avant de passer au contenu principal
  }, [onEnter]);

  return (
    <div className="welcome-page">
      {loading ? (
        <div className="loading-content">
          <h1>Bienvenue sur mon portfolio</h1>
          <p>Chargement...</p><br/><br/><br/><br/><br/><br/>
          <div className="loader"></div> {/* Affiche le loader */}
        </div>
      ) : (
        <div>
          {/* Une fois chargé, affiche le contenu principal ici */}
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
