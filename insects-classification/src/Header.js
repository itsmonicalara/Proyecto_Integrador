import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
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
    label: "Lista de Insectos",
    href: "/listings",
  },
  {
    label: "Mapa",
    href: "/map",
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
      Clasificación de insectos
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