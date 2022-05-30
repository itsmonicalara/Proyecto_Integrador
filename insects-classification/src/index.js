import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cards from './routes/Cards';
import Events from './routes/Events';
import Profile from './routes/Profile';
import Insertar from './routes/Insertar';
import DetailCardInsect from './routes/DetailCardInsect';
import Navbar from './componentes/Navbar';
import DetailsEvent from './routes/DetailsEvent';
import InsertarEventos from './routes/InsertarEventos';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Auth0Provider 
    domain='dev-l6m4pg6m.us.auth0.com' 
    clientId='7vlMxQeCIVLQgXJtK765wiyfjRb799DT' 
    redirectUri={window.location.origin}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="listings" element={<><Navbar /><Cards /></>} />
        <Route path="events" element={<><Navbar /><Events /></>} />
        <Route path="tool" element={<><Navbar /></>} />
        <Route path="account" element={<><Navbar /><Profile /></>} />
        <Route path="insertar" element={<><Navbar /><Insertar /></>} />
        <Route path="/item/:id" element={<><Navbar /><DetailCardInsect /></>} />
        <Route path="/event/:id" element={<><Navbar /><DetailsEvent /></>} />
        <Route path="insertarEvento" element={<><Navbar /><InsertarEventos /></>} />
      </Routes>
    </Auth0Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);