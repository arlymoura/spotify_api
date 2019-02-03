import React from 'react';
import Following from './Following'
import { Row, Col, Button } from 'reactstrap';


const Profile = ({currentUser}) =>{
    const {profile_img_url, display_name, spotify_url, email, artists} = currentUser
   if (currentUser.id) {
    return(
    
        <Row>
            <Col xs="9">
                <h2 className="App">Lista de Artistas</h2>
                <br/>
                <Following data={artists} />
            </Col>
            <Col xs="3">

            <div className="row profile">
                
                    <div className="profile-sidebar">
                        
                        <div className="profile-userpic">
                             <img src={profile_img_url} className="img-responsive" alt=""/> 
                        </div>
                        
                        <div className="profile-usertitle">
                            <div className="profile-usertitle-name">
                                {display_name}
                            </div>
                            <div className="profile-usertitle-job">
                                {email}
                            </div>
                        </div>
                        
                        <div className="profile-userbuttons">
                            <Button href={spotify_url}  color="success" target="_blank" size="sm">Perfil</Button>
                            <Button color="danger" size="sm">Total: {artists.length}</Button>
                        </div>
                    </div>
                
            </div>

            </Col>
        </Row>
        
        
        )
    }
    return null;
}

export default Profile;
