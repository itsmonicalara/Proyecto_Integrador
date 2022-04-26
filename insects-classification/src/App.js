import './styles/App.css';
import Login from './routes/Login';
import { useAuth0 } from '@auth0/auth0-react';
import MainHeader from './routes/MainHeader';
import Home from './routes/Home';


function App() {

  const  { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {/* If theres a user, show profile and logout. Otherwise only login */}
      {isAuthenticated ? (
        <>
          <MainHeader/>
          <Home/>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
