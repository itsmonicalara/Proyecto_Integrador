import React, {useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Text, Avatar } from '@nextui-org/react';
import '../styles/Profile.css';
import mySvg from '../media/scattered-forcefields.svg';


     
function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log(user);

    const role = 'https://example.com/auth0-delegated-admin';
     

  return (
    isAuthenticated && (
        <div className='profile_info' style={{ backgroundImage: `url(${mySvg})` }}>
            <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, #CF3C3C -20%, #CFCF2B 50%",
              marginTop: "3%",
              marginLeft: "3%",
            }}
            weight="bold"
            >
            Perfil
          </Text>
          <br></br>
            <Avatar squared src={user.picture} alt='Profile' zoomed css={{ size: "$20", marginLeft: "3%", marginTop: "3%" }}></Avatar>
            <br></br>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.email_verified}</p>
            {
              user[role].isAdmin && 
                <h1>Ya plox</h1>
              
            }
            
        </div>
    )
  )
}

export default Profile