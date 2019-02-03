import React from 'react';
import { Button, Col, Row } from 'reactstrap';

const Login = ({currentUser}) => {
  if (!currentUser.id) {
    return(
      <Row>
        <Col xs="12">
          <Button href="http://localhost:3000/api/v1/auth"  color="success"
           className="buttonCenter">Click Para  Conntinuar ...</Button>
        </Col>
      </Row>
    )
  }
   return null
}
  
export default Login;
