import './App.css';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import Cards from './Cards';

function App() {

  const  { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {/* If theres a user, show profile and logout. Otherwise only login */}
      {isAuthenticated ? (
        <>
          <Header/>
          <Cards/>
          {/* <Profile />
          <Logout /> */}
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
