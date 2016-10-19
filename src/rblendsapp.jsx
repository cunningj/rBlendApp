import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
//import Logout from './logout.jsx';

class RBlendsApp extends React.Component {
    render() {
        return (<div>
                <Login/>
            </div>
        )
    }
}

ReactDOM.render(<RBlendsApp/>, document.getElementById('app'));
