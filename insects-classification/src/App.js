import './App.css';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';



function App() {

  const  { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {/* If theres a user, show profile and logout. Otherwise only login */}
      {isAuthenticated ? (
        <>
          <Profile />
          <Logout />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
