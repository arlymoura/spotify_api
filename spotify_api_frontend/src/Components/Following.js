import React from 'react';

const Following = ({currentUser}) =>{
    const {Following_img_url, display_name, spotify_url, email} = currentUser
   return(
       <div>
           <h1>{display_name}</h1>
           <h1>{email}</h1>
           <a href={spotify_url}>
            <img src={Following_img_url} alt="spotifyImg"/>
           </a>
       </div>
   )
}

export default Following;
