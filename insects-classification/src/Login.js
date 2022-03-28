import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '@material-ui/core/Button';
import './Login.css'
import logo from './media/tec-logo.png';


function Login() {

  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login">
      <div className='login_logo'>
        <img src={logo} alt=''></img>      
      </div>
      <Button onClick={() => loginWithRedirect()}>Iniciar sesión</Button>
    
    </div>
  )
}

export default Login