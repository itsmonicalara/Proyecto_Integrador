import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cards from './routes/Cards';
import Header from './Header';
import Events from './routes/Events';
import Profile from './routes/Profile';
import Logout from './routes/Logout';
import Insertar from './routes/Insertar';
import DetailCardInsect from './routes/DetailCardInsect';
import Navbar from './componentes/Navbar';



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
        <Route path="logout" element={<><Navbar /><Logout /></>} />
        <Route path="insertar" element={<><Header /><Insertar /></>} />
        <Route path="/item/:id" element={<><Navbar /><DetailCardInsect /></>} />
      </Routes>
    </Auth0Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
