import './inicio.css'; 

const Inicio = () => {
  const hobbies = [
    { title: 'Gym', lastActivity: 'hace 8 horas' },
    { title: 'Gym', lastActivity: 'hace 8 horas' },
    { title: 'Gym', lastActivity: 'hace 8 horas' }
  ];

  const popularHobbies = [
    { title: 'Fotografía', participants: 300, image: '/src/image/image1.png' },
    { title: 'Películas', participants: 700, image: '/src/image/image2.png' },
    { title: 'Beisbol', participants: 600, image: '/src/image/image3.png' },
    { title: 'Fotografía', participants: 300, image: '/src/image/image1.png' },
    { title: 'Películas', participants: 700, image: '/src/image/image2.png' },
    { title: 'Beisbol', participants: 600, image: '/src/image/image3.png' }
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
        <button className="view-more">Ver mas..</button>
      </main>
    </div>
  );
};

export default Inicio;
