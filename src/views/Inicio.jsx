import './inicio.css'; // Crea el archivo de estilos

const Inicio = () => {
  const hobbies = [
    { title: 'Gym', lastActivity: 'hace 8 horas' },
    { title: 'Gym', lastActivity: 'hace 8 horas' },
    { title: 'Gym', lastActivity: 'hace 8 horas' }
  ];

  const popularHobbies = [
    { title: 'Fotografía', participants: 300, image: 'https://via.placeholder.com/150' },
    { title: 'Películas', participants: 700, image: 'https://via.placeholder.com/150' },
    { title: 'Beisbol', participants: 600, image: 'https://via.placeholder.com/150' }
  ];

  return (

    <div className="inicio-container">
      <aside className="hobbies-list">
        <h3>Tus Hobbies</h3>
        {hobbies.map((hobby, index) => (
          <div className="hobby-item" key={index}>
            <p>{hobby.title}</p>
            <div className="hobby-details">
              <span>Última actividad</span>
              <span>{hobby.lastActivity}</span>
            </div>
          </div>
        ))}
        <button className="view-all">Ver todos</button>
      </aside>

      <main className="hobbies-main">
        <h3>Hobbies populares</h3>
        <div className="hobbies-popular">
          {popularHobbies.map((hobby, index) => (
            <div className="hobby-card" key={index}>
              <img src={hobby.image} alt={hobby.title} />
              <h4>{hobby.title}</h4>
              <p>Participantes: {hobby.participants}</p>
              <button className="join-btn">Unirse</button>
            </div>
          ))}
        </div>
      </main>

      <section className="hobbies-more">
        <h3>Ver más...</h3>
        <div className="hobbies-popular">
          {popularHobbies.map((hobby, index) => (
            <div className="hobby-card" key={index}>
              <img src={hobby.image} alt={hobby.title} />
              <h4>{hobby.title}</h4>
              <p>Participantes: {hobby.participants}</p>
              <button className="join-btn">Unirse</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Inicio;
