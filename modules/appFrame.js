//Main component in the "protected" path
//Utilizes the RequireLogin component to grant access to children pages/components
//Similar authentication check/logic as the server performs

import RequireLogin from './RequireLogin'
import NavbarComponent from './navbar'
import React from 'react'
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';


export default class AppFrame extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render(){
        return (

        <RequireLogin>
            <NavbarComponent>
                {this.props.children}
            </NavbarComponent>
        </RequireLogin>

        )
    }
}
