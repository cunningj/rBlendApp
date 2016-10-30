import React from 'react';
const Router = require('react-router');
import { connect } from 'react-redux'
import { logIn, logOut } from './redux/actions'


function mapStateToProps(state){
    return {
        loggedIn: state.loggedIn
    }
}

function mapDispatchToProps(dispatch){
    return {
        setLoginState : function(loggedIn, username){
            loggedIn ? dispatch(logIn(username)) : dispatch(logOut)
        }
    }
}

class RequireLogin extends React.Component{

    checkLogin(){
        var self = this
        return fetch('/api/authenticated', {
            method: 'GET',
            credentials: 'same-origin'
            }
        ).then(function (response) {
            return response.json()
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        }).then(function (response) {
                console.log("Got Response", response)
                self.props.setLoginState(response.loggedIn, response.user);
                if(!response.loggedIn){
                    Router.browserHistory.push('/login');
                }
        })
    }

    componentWillMount(){
        if(this.props.loggedIn === false){
            Router.browserHistory.push('/login')
        } else if (this.props.loggedIn === undefined){
            this.checkLogin();
        }
    }


    render(){
        console.log(Router)
        if(this.props.loggedIn){
            return <div>{this.props.children}</div>
        } else if(this.props.loggedIn === false) {
            return <div>redirecting</div>
        } else if(this.props.loggedIn === undefined){
            return <div>Loading...</div>
        }

    }
}

const connectToComponent = connect(mapStateToProps, mapDispatchToProps);
module.exports = connectToComponent(RequireLogin)