import React, { Component } from 'react';
import {Route, withRouter} from "react-router-dom"
import { Container, Row, Col } from 'reactstrap';
import Callback from "./Callback"
import Profile from "./Profile"
import Login from "./Login"
import Auth from "../Adapters/Auth"
import './App.css';
import '../index.scss';
import './Porfile.scss';




class App extends Component {
  
  state = {
    currentUser:{}
  }

  renderProfile = () =>{
    return <Profile currentUser = {this.state.currentUser}/>
  } 

  handleCode = (code) =>{
    Auth.login(code)
      .then(res=>{
        const currentUser = res
        this.setState({currentUser},this.props.history.push("/profile"))
      })
  }

  handleCallback = ({location}) =>{
    return <Callback location={location} handleCode={this.handleCode} />
  }

  render() {
    
    return (
      <div>
      <Container>
        <Row>
          <Col xs="12">
          <div class="header">
            <div class="inner">
             <div class="user-ui">
                <div class="user-menu-toggle"></div>
             </div>
            </div>
            <br/>
            
          </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <h1  className="App">SPOTIFY API</h1>
          </Col>
        </Row>
                    
        <Row>
          <Col xs="12">
            <Login currentUser={this.state.currentUser}/>
            <Route exact path="/callback" component={this.handleCallback} />
          </Col>
        </Row>
        <Row>
          <br/>
          <Route exact path="/profile" component={this.renderProfile} />
        </Row>
      </Container>
      </div>
      
    );
  }
}


export default withRouter(App);
