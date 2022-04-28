import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'


function Navbar() {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>InsectoRed</h1>
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
                {/* <NavLink to="/logout" activeStyle>
                    Cerrar sesión
                </NavLink> */}
            </NavMenu>
            <NavBtn>
                <NavBtnLink to ="/logout">Cerrar sesión</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar