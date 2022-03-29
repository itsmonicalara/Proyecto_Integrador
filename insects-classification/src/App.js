import './styles/App.css';
import Login from './routes/Login';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './Header';
import { Link } from "react-router-dom";
import Home from './routes/Home';


function App() {

  const  { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {/* If theres a user, show profile and logout. Otherwise only login */}
      {isAuthenticated ? (
        <>
          <Header/>
          <Home/>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
