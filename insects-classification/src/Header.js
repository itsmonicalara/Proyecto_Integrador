import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react';
import Logout from "./routes/Logout";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#6aa84f",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const headersData = [
  {
    label: "Lista de Arañas",
    href: "/listings",
  },
  {
    label: "Eventos",
    href: "/events",
  },
  {
    label: "Clasificador",
    href: "/tool",
  },
  {
    label: "Mi cuenta",
    href: "/account",
  },
  {
    label: "Cerrar sesión",
    href: "/logout",
  },
];

export default function Header() {
  const { header, logo, toolbar } = useStyles();

  const displayDesktop = () => {
    return <Toolbar className={toolbar}>{header_title}<div>{getMenuButtons()}</div></Toolbar>;
  };

  const header_title = (
    <Typography variant="h6" component="h1" className={logo}>
      InsectoRed México
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}