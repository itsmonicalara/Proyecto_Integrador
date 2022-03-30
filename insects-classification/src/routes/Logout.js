import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '@material-ui/core/Button';
import '../styles/Logout.css'

function Logout() {

  const { logout } = useAuth0();

  return (
    <div className='logout'>
      <Button onClick={() => logout({ returnTo: window.location.origin })}>Cerrar sesión</Button>
    </div>
  )
}

export default Logout