import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.js';
import {browserHistory} from 'react-router';

//import Logout from './logout.jsx';

class Home extends React.Component {
    render() {
        return (<div>
                <h2>Successfully logged in!</h2>
            </div>
        )
    }
}


module.exports = Home;
//ReactDOM.render(<RBlendsApp/>, document.getElementById('app'));
