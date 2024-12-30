import React from "react";
import { useState } from "react";

const Register = () => {
    // Definimos los estados para las contraseñas y el mensaje de validación
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
  
    // Función para validar las contraseñas
    const validatePasswords = () => { 


      // Validación de campos vacíos
      if (!password || !confirmPassword) {
        setMessage('Por favor, completa todos los campos');
        return;
      }
  
      // Comprobamos que la contraseña tenga al menos 6 caracteres
      if (password.length < 6) {
        setMessage('La contraseña debe tener al menos 6 caracteres');
        return;
      }
  
      // Comprobamos si las contraseñas coinciden
      if (password !== confirmPassword) {
        setMessage('Las contraseñas no coinciden');
      } else {
        setMessage('Las contraseñas coinciden');
      }

      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setPassword('')
    };
  
    return (
      <div>
        <form className="formulario">
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" className="form-control"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
          value={email} />
            </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado directamente
              placeholder="Ingresa tu contraseña"
            />
          </div>
  
          <div>
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              className="form-control"
              onChange={(e) => setConfirmPassword(e.target.value)} // Actualiza el estado directamente
              placeholder="Confirma tu contraseña"
            />
          </div>
  
          {/* Botón para validar */}
          <button type="button" onClick={validatePasswords}>
            Validar Contraseñas
          </button>
        </form>
  
        {/* Mostrar el mensaje de validación */}
        {message && <p>{message}</p>}
      </div>
    );
  };
  
export default Register;
