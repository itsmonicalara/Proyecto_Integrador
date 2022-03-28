import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Avatar from '@material-ui/core/Avatar';
import './Profile.css'

     
function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading...</div>;
    }
  return (
    isAuthenticated && (
        <div className='profile_info'>
            <Avatar src={user.picture} alt='Profile'></Avatar>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.email_verified}</p>
        </div>
    )
  )
}

export default Profile