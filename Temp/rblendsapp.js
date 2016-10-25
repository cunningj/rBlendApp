import React from 'react';
import ReactDOM from 'react-dom';
import Login from './../modules/login.js';
//import Logout from './logout.jsx';

class RBlendsApp extends React.Component {
    render() {
        return (<div>
                I AM THE APP
                {this.props.children}
            </div>
        )
    }
}


module.exports = RBlendsApp;
//ReactDOM.render(<RBlendsApp/>, document.getElementById('app'));
