//Resource page with external links to URLs
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.js';
import {browserHistory} from 'react-router';
import {Modal, Button, FormGroup, form, FormControl, Panel} from 'react-bootstrap';
import ShowStudents from './showStudents'
import {connect} from 'react-redux'
//import Logout from './logout.jsx';


class Resources extends React.Component {
    render() {

        return (<div>

                    <h3>R-Blend App Creators</h3>
                    <ul>
                        <li>
                            <a href="http://bigskyspeechtherapy.com/" className="resourceLinks" target="_blank">
                                Big Sky Speech Therapy Games
                            </a> <p>Game Company</p>
                        </li>
                        <li>
                            <a href="http://triciaopstadslp.com/index.html" className="resourceLinks" target="_blank">
                                Tricia Opstad, MS, CCC-SLP
                            </a> <p>'Kate the Brave' Author and Editor. Consultant.</p>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/josh-quick-763a159" className="resourceLinks" target="_blank">
                                Josh Quick
                            </a> <p>2016 Montana Code School Student</p>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jacob-cunningham-364451a5" className="resourceLinks" target="_blank">
                                Jacob Cunningham
                            </a> <p>2016 Montana Code School Student</p>
                        </li>
                    </ul>
            </div>
        )
    }
}

module.exports = Resources
//ReactDOM.render(<RBlendsApp/>, document.getElementById('app'));
