import React, { Component } from 'react';
import openSocket from 'socket.io-client';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: openSocket('http://localhost:3001'),
      success: 'You have been logged in. KELSEY CHANGE THIS TO A COUNT OF 3000 THEN REDIRECT',
      successCheck: false,
      errorCheck: false,
      error: '',
      loading: false
    }
  }

  componentDidMount(){
    this.state.socket.addEventListener('fillAllFields', (msg) => {
      this.setState({
        errorCheck: true,
        error: 'Please fill in email and password.'
      });
    }),
    this.state.socket.addEventListener('doNotMatch', (msg) => {
      this.setState({
        errorCheck: true,
        error: 'Email and password do not match.'
      });
    }),
    this.state.socket.addEventListener('EmailNotRegistered', (msg) => {
      this.setState({
        errorCheck: true,
        error: 'The email entered has not been registered.'
      });
    }),
    this.state.socket.addEventListener('success', (msg) => {
      this.setState({
        successCheck: true
      });
    });
  }

  render() {
    if (this.state.successCheck) {
      return ( 
        <div>{this.state.success}</div>
        )
    } else {
      return ( 
        <div>
          <h1>Login</h1>
          {this.state.errorCheck ? <div className="name-this">{this.state.error}</div> : ''}
          <LoginForm  onSubmit={this.formSubmit}/>
        </div> 
      )
    }
  }

  formSubmit = data => {
    data.preventDefault();
    this.setState({
      loading: true
    });
    fetch('http://localhost:3001/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.target.email.value,
        password: data.target.password.value
      })
    })
    .then(function(response) {
      this.setState({
        // TODO FINISH LOADING ICON
        loading: false
      });
    })
    .catch(error => {
      // console.log(error);
    });
  }
}

const LoginForm = (props) => {

  return (

    <form onSubmit={props.onSubmit}>
      <input id="email" type="email" name="email" placeholder="Email" />
      <input id="password" type="password" name="password" placeholder="Password"/>
      <input type="submit"  className="button" value="Submit" />
    </form>

  )
}

export default Login