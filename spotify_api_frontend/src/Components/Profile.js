import React from 'react';
import Following from './Following'

const Profile = ({currentUser}) =>{
    const {profile_img_url, display_name, spotify_url, email, artists} = currentUser
    
   return(
        

       <div>
           <h1>{display_name}</h1>
           <h1>{email}</h1>
           <a href={spotify_url}>
            <img src={profile_img_url} alt="spotifyImg"/>
           </a>
           <Following data={artists} />
       </div>
       

   )
}

export default Profile;
