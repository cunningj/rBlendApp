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

                    <h3>SLP Games & Resources</h3>
                    <ul>
                        <li>
                            <a href="http://bigskyspeechtherapy.com/" className="resourceLinks" target="_blank">
                                Big Sky Speech Therapy:
                            </a> <p>Makers of games...</p>
                        </li>
                        <li>
                            <a href="http://www.asha.org/" className="resourceLinks" target="_blank">
                                ASHA:
                            </a> <p>American Speech-Language-Hearing Association</p>
                        </li>
                        <li>
                            <a href="http://www.mshaonline.org/" className="resourceLinks" target="_blank">
                                MSHA:
                            </a> <p>Montana licensed Audiologists and Speech-Language Pathologists</p>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/josh-quick-763a159" className="resourceLinks" target="_blank">
                                Josh Quick:
                            </a> <p>2016 Montana Code School Student/R-Blend App Creator</p>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jacob-cunningham-364451a5" className="resourceLinks" target="_blank">
                                Jacob Cunningham:
                            </a> <p>2016 Montana Code School Student/R-Blend App Creator</p>
                        </li>
                    </ul>
            </div>
        )
    }
}

module.exports = Resources
//ReactDOM.render(<RBlendsApp/>, document.getElementById('app'));
