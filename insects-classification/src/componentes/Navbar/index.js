import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
import { Button } from "@nextui-org/react";
import '../../styles/Navbar.css';
import { Text } from "@nextui-org/react";

function Navbar() {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1 className='nav-title'>InsectoRed</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/listings" activeStyle>
                    Lista de Arañas
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
                {/* <NavBtnLink to ="/logout">Cerrar sesión</NavBtnLink>
                 */}
                 <Button className='nav-button' color="secondary" auto onClick={() => { window.location.href='/logout' }}>
                   Cerrar sesión
                 </Button>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar