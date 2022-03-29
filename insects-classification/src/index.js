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
import { render } from "react-dom";
import Cards from './routes/Cards';
import Header from './Header';
import Map from './routes/Map';
import Profile from './routes/Profile';
import Logout from './routes/Logout';



ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Auth0Provider 
    domain='dev-l6m4pg6m.us.auth0.com' 
    clientId='7vlMxQeCIVLQgXJtK765wiyfjRb799DT' 
    redirectUri={window.location.origin}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="listings" element={<><Header /><Cards /></>} />
        <Route path="events" element={<><Header /><Map /></>} />
        <Route path="tool" element={<><Header /></>} />
        <Route path="account" element={<><Header /><Profile /><Logout /></>} />
        <Route path="logout" element={<><Header /><Logout /></>} />
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
