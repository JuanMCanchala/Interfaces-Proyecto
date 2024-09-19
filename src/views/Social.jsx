import React from 'react';
import './social.css';

const Social = () => {
  return (
    <div className="social-page">
      <div className="social-container">
        <div className="contact-list">
          <div className="contact">
            <div className="profile-picture"></div>
            <p>Contacto 1</p>
          </div>
          <div className="contact">
            <div className="profile-picture"></div>
            <p>Contacto 2</p>
          </div>
          <div className="contact">
            <div className="profile-picture"></div>
            <p>Contacto 3</p>
          </div>
          <div className="contact">
            <div className="profile-picture"></div>
            <p>Contacto 4</p>
          </div>
          <div className="contact">
            <div className="profile-picture"></div>
            <p>Contacto 5</p>
          </div>
        </div>

        <div className="chat-box">
          <div className="messages">
            <div className="message sent">Hola, ¿cómo estás?</div>
            <div className="message received">¡Bien, gracias! ¿Y tú?</div>
          </div>
          <div className="input-container">
            <input type="text" placeholder="Escribe tu mensaje..." />
            <button type="button" className="send-button">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
