import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Text, Avatar } from '@nextui-org/react';
import '../styles/Profile.css'

     
function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading...</div>;
    }
  return (
    isAuthenticated && (
        <div className='profile_info'>
            <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $blue500 -20%, $pink500 50%",
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
        </div>
    )
  )
}

export default Profile