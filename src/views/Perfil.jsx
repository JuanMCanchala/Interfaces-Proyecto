import { useState } from 'react';
import './perfil.css';

const Perfil = () => {
  const [image, setImage] = useState('https://via.placeholder.com/150'); 
  const [aboutMe, setAboutMe] = useState(
    'Soy Juan Manuel Canchala y me gusta mucho el ajedrez, lamentablemente me he vuelto adicto a los Uvas de programación, así que dedico mi vida a hacer feliz a Carlos Ramirez.'
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleEditAboutMe = () => {
    setIsEditing(!isEditing);
  };

  const handleAboutMeChange = (e) => {
    setAboutMe(e.target.value);
  };

  return (
    <div className="profile-container">
      <div className="cover-photo">
        <img src="https://via.placeholder.com/800x200" alt="Foto de portada" />
      </div>
      <div className="profile-info">
        <div className="profile-picture">
          <img src={image} alt="Perfil" />
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="profile-details">
          <h2 className='name-profile'>Canchala F</h2>
          <p>@canchala_F</p>
          <div className="profile-stats">
            <span>170 seguidores</span> | <span>200 siguiendo</span>
          </div>
        </div>
        <button className="follow-btn">Follow</button>
      </div>
      <div className="about-section">
        <h3>Sobre mí :</h3>
        {isEditing ? (
          <textarea
            value={aboutMe}
            onChange={handleAboutMeChange}
            rows="5"
          ></textarea>
        ) : (
          <div className="about-me"><p>{aboutMe}</p></div>
        )}
        <button onClick={handleEditAboutMe}>
          {isEditing ? 'Guardar' : 'Editar'}
        </button>
      </div>
    </div>
  );
};

export default Perfil;
