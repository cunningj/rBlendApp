import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import {browserHistory} from 'react-router';

class Login extends React.Component {
    login() {
        var self = this;
        fetch('/api/authenticate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
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
                browserHistory.push('/home');
            }
        })
    }


    render() {
        return (
            <div>
                <div>
                    <div className="container bkg">
                        <div className="col-sm-6 col-sm-offset-3">
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

                                <button onClick = {this.login.bind(this)} type="submit" className="btn btn-warning btn-lg">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


module.exports = Login;
