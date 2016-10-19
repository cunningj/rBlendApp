import React from 'react';
import ReactDOM from 'react-dom';
//import requests from './request.js'

//var request = requests.request
//var formRequest = requests.formRequest

class Login extends React.Component {
    logIn() {
        formRequest('/api/authenticate', "POST", {
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
        return (
            <div>
                <div>
                    <div className="container bkg">
                        <div className="col-sm-6 col-sm-offset-3">
                            <h1><span className="fa fa-sign-in"></span>Therapist Sign-In</h1>
                            <form action="/login" method="post">
                                <form className= "form-group">
                                    <label className="appSignin" >Username</label>
                                    <input type="email" className="form-control"
                                           onChange={e => this.setState({username: e.target.value})}></input>
                                </form>
                                <div className="form-group">
                                    <label  className="appSignin">Password</label>
                                    <input type ="password" className="form-control"
                                           onChange={e => this.setState({password: e.target.value})}></input>
                                </div>

                                <button type="submit" className="btn btn-warning btn-lg">Login</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


module.exports = Login
