import React, { Component } from 'react';
import openSocket from 'socket.io-client';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      socket: openSocket('http://localhost:3001'),
      success: 'Thank you for registering',
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
        error: 'Please fill in all fields.'
      });
    }),
    this.state.socket.addEventListener('emailNotUnique', (msg) => {
      this.setState({
        errorCheck: true,
        error: 'The email provided is already registered'
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
          <h1>Register</h1>
          {this.state.errorCheck ? <div className="name-this">{this.state.error}</div> : ''}
          <RegisterForm  onSubmit={this.formSubmit}/>
        </div> 
      )
    }
  }
  formSubmit = data => {
    data.preventDefault();
    this.setState({
      loading: true
    });
    fetch('http://localhost:3001/register', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        handle: data.target.handle.value,
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


const RegisterForm = (props) => {

  return (

    <form onSubmit={props.onSubmit}>
      <input id="handle "type="text" name="handle" placeholder="Your handle"/>
      <input id="email" type="email" name="email" placeholder="Email" />
      <input id="password" type="password" name="password" placeholder="Password"/>
      <input type="submit"  className="button" value="Submit" />
    </form>

  )
}

export default Register