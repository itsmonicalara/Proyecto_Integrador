import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { render } from "react-dom";
import Expenses from "./routes/expenses";


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Auth0Provider 
    domain='dev-l6m4pg6m.us.auth0.com' 
    clientId='7vlMxQeCIVLQgXJtK765wiyfjRb799DT' 
    redirectUri={window.location.origin}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="expenses" element={<Expenses />} />
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
