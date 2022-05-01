import './styles/App.css';
import Login from './routes/Login';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './routes/Home';
import { NextUIProvider } from '@nextui-org/react';
import Navbar from './componentes/Navbar';



function App() {

  const  { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {/* If theres a user, show profile and logout. Otherwise only login */}
      {isAuthenticated ? (
        <>
          <NextUIProvider>
            {/* <MainHeader/> */}
            <Navbar/>
            <Home/>
          </NextUIProvider>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
