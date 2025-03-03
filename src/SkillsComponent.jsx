import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Assure-toi d'importer les styles AOS
import AOS from 'aos';
import { useTranslation } from 'react-i18next';  

const SkillsComponent = () => {
  useEffect(() => {
    // Initialisation d'AOS
    AOS.init();

    // Si tu veux des effets personnalisés à chaque élément lors du défilement.
    // AOS.init({
    //   duration: 1200,
    //   easing: 'ease-in-out',
    //   once: true,
    // });
  }, []);

  // Fonction pour défiler le conteneur
  const scrollLeft = () => {
    document.getElementById('skills-container').scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    document.getElementById('skills-container').scrollBy({ left: 300, behavior: 'smooth' });
  };
    const { t, i18n } = useTranslation();
  return (
    <div className="skills-section" style={{zIndex: 2,position: 'relative',backgroundColor : "#f9fbfd"  }}>
      
      <button className="scroll-button left" onClick={scrollLeft}>
        <img src="images/chocolat/left.png" alt="" />
    {/* <i className="fas fa-arrow-left" style={{ fontSize: '12px' }}></i> */}
  </button>
  <button className="scroll-button right" onClick={scrollRight}>
  <img src="images/chocolat/right.png" alt="" />
    {/* <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i> */}
  </button>


      <div className="skills-container" id="skills-container">
        <div className="skills-card" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skills-icon" />
          <p className="skills-title">React</p>
          <p className="skills-description">{t('React')}</p>
        </div>

        <div className="skills-card" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt=".Net" className="skills-icon" />
          <p className="skills-title">.Net</p>
          <p className="skills-description">{t('.Net')}</p>
        </div>
        
        <div className="skills-card" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Spring Boot" className="skills-icon" />
          <p className="skills-title">Flutter</p>
          <p className="skills-description">{t('Flutter')}</p>
        </div>

        <div className="skills-card" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="skills-icon" />
          <p className="skills-title">Spring Boot</p>
          <p className="skills-description">{t('Spring Boot')} </p>
        </div>

        <div className="skills-card" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skills-icon" />
          <p className="skills-title">JavaScript</p>
          <p className="skills-description">{t('JavaScript')}</p>
        </div>

        <div className="skills-card" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="skills-icon" />
          <p className="skills-title">Python</p>
          <p className="skills-description">{t('Python')}</p>
        </div>
        
        <div className="skills-card" data-aos="fade-up">
          <img src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg"  alt="Python" className="skills-icon" />
          <p className="skills-title">Django</p>
          <p className="skills-description">{t('Django')}</p>
        </div>


        <div className="skills-card" data-aos="fade-up">
        <img 
          src="https://www.vectorlogo.zone/logos/android/android-icon.svg" 
          alt="Android" 
          className="skills-icon" 
        />
        <p className="skills-title">Android</p>
        <p className="skills-description">{t('Android')}</p>
      </div>



      </div>
    </div>
  );
};

export default SkillsComponent;
