import React from 'react';
const Router = require('react-router');
import { connect } from 'react-redux'

function mapStateToProps(state){
    return {
        loggedIn: state.loggedIn
    }
}

class RequireLogin extends React.Component{

    componentWillMount(){
        if(!this.props.loggedIn){
            Router.browserHistory.push('/login')
        }
    }

    render(){
        console.log(Router)
        if(this.props.loggedIn){
            return <div>{this.props.children}</div>
        } else {

            return <div>redirecting</div>
        }

    }
}

const connectToComponent = connect(mapStateToProps);
module.exports = connectToComponent(RequireLogin)