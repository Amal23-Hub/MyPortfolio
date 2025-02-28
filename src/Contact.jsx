import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';  

export const ContactUs = () => {
  const form = useRef();
  const { t } = useTranslation(); // Garder cette ligne une seule fois
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xaxq1nw', 'template_icytr1n', form.current, {
        publicKey: 'RG4jT9v3ayVpKJ8PE',
      })
      .then(
        (result) => {
          // Vérification de la réponse de la promesse
          if (result.status === 200) {
            // Afficher un message de succès
            Swal.fire({
              title: t("succès"),
              text: t("Message"),  // Utilisation correcte de la traduction
              icon: "success"
            });
          } else {
            // Afficher un message d'erreur si la réponse ne contient pas de statut 200
            Swal.fire({
              title: "Error",
              text: "Une erreur est survenue, veuillez réessayer",
              icon: "error"
            });
          }
        },
        (error) => {
          // Si une erreur se produit
          console.log('FAILED...', error.text);
          Swal.fire({
            title: "Error",
            text: "Une erreur est survenue, veuillez réessayer",
            icon: "error"
          });
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="row">
        <div className="col-sm-6 col-xs-12">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder={t('Nom*')}
              name="from_name"
            />
          </div>
        </div>
        <div className="col-sm-6 col-xs-12">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email*"
              name="from_email"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder={t("Sujet")}
              name="subject"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="form-group">
            <textarea
              className="form-control"
              rows="8"
              id="comment"
              placeholder="Message"
              name="message"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="single-contact-btn">
            <input
              className="contact-btn"
              type="submit"
              value={t("Envoyer")}
              style={{
                backgroundColor: '#427fc4',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                width: '100%',
                height: '50px',
                boxShadow: '0 5px 20px rgba(0,0,0,.2)',
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
