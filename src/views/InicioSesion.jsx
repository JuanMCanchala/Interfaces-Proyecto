import { useState } from 'react';
import './inicioSesion.css'; 

const InicioSesion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src="/src/image/image6.png" alt="Imagen de hobbies" />
      </div>
      <div className="login-form">
        <h1>HO</h1>
        <h3>REGISTRATE O INICIA SESIÓN</h3>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Usuario" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default InicioSesion;
