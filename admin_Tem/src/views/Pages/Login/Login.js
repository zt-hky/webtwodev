import React, { Component } from 'react';

import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import LoginAction from '../../../action/login.action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
class Login extends Component {

  frm_onSubmit = (event) => {
   this.props.login({username:this.props.username, password:this.props.password})
   event.preventDefault()
  }

  goToHome = () =>{
    if(localStorage.getItem('token')){
      return <Redirect to="/Home"></Redirect>
    }
  }

  render() {
    console.log(this.props);
    
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit = {this.frm_onSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input name="username" value={this.props.username} onChange ={this.props.inputChanged} type="text" placeholder="Username" autoComplete="username" />

                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input name='password' onChange = {this.props.inputChanged} type="password" placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              
              </CardGroup>
            </Col>
          </Row>
        </Container>
        {this.goToHome()}
      </div>
    );
  }
}
function MapStatetoProp(State){

  return State.Login;
}

function MapDisPatchtoProp(DisPatch){

  return bindActionCreators({
    inputChanged: LoginAction.inputChanged,
    login: LoginAction.login
  },DisPatch);
}

export default connect(MapStatetoProp, MapDisPatchtoProp)(Login);
