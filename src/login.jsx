import React from 'react';
import ReactDOM from 'react-dom';
//import requests from './request.js'

//var request = requests.request
//var formRequest = requests.formRequest

class Login extends React.Component {
  logIn(){
    formRequest('/authenticate', "POST", {
                                username: this.state.username,
                                password: this.state.password
                                },
                               response => this.props.setLogin(response.loggedIn))
  }

//  logOut(){
//    request('/logout', "GET", null, response => this.setState({loggedIn: response.loggedIn}))
//  }
// <div><h1>HELLO this is login</h1></div>
  render() {
    return  (
          <div>

            <div id="logInBkg"class="container">
  <form class="form-sigin">
    <h2 class="form-signin-heading">Therapist sign-in</h2>
    <label  for="inputEmail" class="sr-only"></label>
    <input type="form" class="form-control" onChange={e => this.setState({username: e.target.value})}/>
    <label for="inputPassword" class="sr-only"></label>
    <input type="form" class="form-control" onChange={e => this.setState({password: e.target.value})}/>
    <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={this.logIn.bind(this)}>Sign in</button>
</form>
</div>

</div>)
  }
}

module.exports = Login
