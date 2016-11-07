//Component for the login page
//Creates forms for sending user/pass to the authenticate route to get issued a valid JWT
//Also contains newUser modal for creating new account
//Upon successful login redirects user to "/protected/home"

import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import {browserHistory, Link} from 'react-router';
import { logIn } from './redux/actions'
import { connect } from 'react-redux'
import CreateUser from './createUser'


function mapStateToProps(state){
    return {
        login: state.logIn
    }
}

function mapDispatchToProps(dispatch){
    return {
        setLoginState : function(username){
            dispatch(logIn(username))
        }
    }
}

const loginConnector = connect(mapStateToProps, mapDispatchToProps)

class Login extends React.Component {
    login() {
        var self = this;
        fetch('/api/authenticate', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: self.state.username,
                password: self.state.password
            })
        }).then(function (response) {
            console.log(response)
                return response.json()
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            }).then(function (response) {
            if (response.success===true) {
                self.props.setLoginState(response.user);
                browserHistory.push('/protected/home');
            }
        })
    }

    render() {
        return (
            <div>
                <div>
                        <div className="col-sm-6 col-sm-offset-3 signIn">
                            <h1>Therapist Sign-In</h1>

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
                                <button onClick = {this.login.bind(this)} type="submit" className="btn btn-warning btn-lg login">Login</button>
< CreateUser/>
                        </div>
                    </div>
                </div>
        )
    }
}


module.exports = loginConnector(Login);
