import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn } from './NavbarElements'
import { Button } from "@nextui-org/react";
import '../../styles/Navbar.css';
import { useAuth0 } from '@auth0/auth0-react'


function Navbar() {

    const { logout } = useAuth0();

  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1 className='nav-title'>InsectoRed</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/listings" activeStyle>
                    Lista de Insectos
                </NavLink>
                <NavLink to="/events" activeStyle>
                    Eventos
                </NavLink>
                <NavLink to="/tool" activeStyle>
                    Clasificador
                </NavLink>
                <NavLink to="/account" activeStyle>
                    Cuenta
                </NavLink>
            </NavMenu>
            <NavBtn>
                 <Button className='nav-button' color="secondary" auto onClick={() => logout({ returnTo: window.location.origin })}>
                   Cerrar sesión
                 </Button>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar