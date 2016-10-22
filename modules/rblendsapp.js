import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.js';
//import Logout from './logout.jsx';

class RBlendsApp extends React.Component {
    render() {
        return (<div>
                <Login/>
            </div>
        )
    }
}


module.exports = RBlendsApp;
//ReactDOM.render(<RBlendsApp/>, document.getElementById('app'));
