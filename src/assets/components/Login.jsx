import React from 'react'

const Login = () => {
 const [email, setEmail] = ('')
const [password, setPassword] = ('')
const [error, setError] = ('')

//funcion para los campos vacios 
 const validarDatos = (e) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setError(true)
      return
    }
    setError(false)
  }

  return (

    <form className="formulario">

        <h2>Login</h2>
        <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder='Ingresa tu Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}/>
      
        </div>

        <div className="form-group">

      <label>Contraseña</label>
      <input type="text" placeholder='Ingresa tu Contraseña' className="form-control" 
      onChange={(e) => setPassword(e.target.value)}
      value={password}/>
          </div>
        
      <button>Enviar</button>
    </form>
  )
}

export default Login
