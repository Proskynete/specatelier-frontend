import React, { Component } from 'react';
import axios from '../../axios';

export default class Login extends Component {

  state = {
    email: '',
    password: '',
    registrationErrors: null
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    axios.post('/sessions',
     { user: { email: email, password: password} },
     { withCredentials: true }
    ).then(response => {
      if (response.data.logged_in){
        this.props.handleSuccessfullAuth(response.data)
      }
    }).catch(error => {
      console.log(error);
    })
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.state.registrationErrors}
          <input type="email" name='email' value={this.state.email} onChange={this.handleChange} required/>
          <input type="password" name='password' value={this.state.password} onChange={this.handleChange} required/>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}