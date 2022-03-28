import './App.css';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './Header';
import Cards from './Cards';
import Map from './Map';


function App() {

  const  { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {/* If theres a user, show profile and logout. Otherwise only login */}
      {isAuthenticated ? (
        <>
          <Header/>
          {/* <Cards/>    */}
          {/* <Profile/> */}
          <Map/>
          {/* <Logout/> */}

          {/* <Router>
            <Routes>
            <Route path= '/' element = {<Login />} />
            <Route path='/map' element = {<Map />} />
            <Route path= '/logout' element = {<Logout />} />
            <Route path= '/profile' element = {<Profile />} />
            <Route path= '/listings'  element = {<Cards />} />
            </Routes>
          </Router>      */}
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
