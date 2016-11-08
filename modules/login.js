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
import {Image, form, ValidationState, FormControl, Button, Input, FormGroup} from 'react-bootstrap';


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

    constructor(props) {
        super(props);
        this.state = {
            amILoggedIn: null
        };
    }

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
            if (response.success===false) {
                self.setState({amILoggedIn: false});
            } else if (response.success===true) {
                console.log("SELF PROPS SETLOGINSTATE SUCCESS: " + self.props.setLoginState);
                self.props.setLoginState(response.user);
                browserHistory.push('/protected/home');
            }
        })
    }


    render() {
        console.log("THIS IS THE PROPS: " + this.state);
        return (
            <div>
                <div>
                        <div className="col-sm-6 col-sm-offset-3 signIn">
                            <Image src="img/rBlend_logo-01.png" responsive className="signInLogo"/>
                            <h1>Therapist Sign-In</h1>

                                <form>
                                    <FormGroup  validationState={this.state.amILoggedIn === false ? "error" : null}>
                                    <label className="appSignin" >Username</label>
                                    <FormControl type="email"className="input"
                                           onChange={e => this.setState({username: e.target.value, amILoggedIn: null})}></FormControl>

                                    <label  className="appSignin">Password</label>
                                    <FormControl type ="password"
                                           onChange={e => this.setState({password: e.target.value, amILoggedIn: null})}></FormControl>
                                    </FormGroup>
                                </form>
                                <button onClick = {this.login.bind(this)} type="submit" className="btn btn-warning btn-lg login">Login</button>
< CreateUser/>
                        </div>
                    </div>
                </div>
        )
    }
}


module.exports = loginConnector(Login);
