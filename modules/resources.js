//Resource page with external links to URLs
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.js';
import {browserHistory} from 'react-router';
import {Image, Modal, Button, FormGroup, form, FormControl, Panel} from 'react-bootstrap';
import ShowStudents from './showStudents'
import {connect} from 'react-redux'
//import Logout from './logout.jsx';


class Resources extends React.Component {
    render() {

        return (<div>
                <div className="row">
            <div className="col-xs-6 col-sm-3 col-md-3">
                <a href="http://bigskyspeechtherapy.com/" className="resourceLinks" target="_blank">
                <Image src="../img/resCard_1.png" responsive className="cardContainer"/>
</a>
                </div>

                <div className="col-xs-6 col-sm-3 col-md-3">
                    <a href="http://triciaopstadslp.com/" className="resourceLinks" target="_blank">
                    <Image src="../img/resCard_2.png" responsive className="cardContainer"/>
                    </a>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3">
                    <a href="https://www.linkedin.com/in/josh-quick-763a159" className="resourceLinks" target="_blank">
                    <Image src="../img/resCard_3.png" responsive className="cardContainer"/>
                        </a>

                </div>
                <div className="col-xs-6 col-sm-3 col-md-3">
                    <a href="https://www.linkedin.com/in/jacob-cunningham-364451a5" className="resourceLinks" target="_blank">
                    <Image src="../img/resCard_4.png" responsive className="cardContainer"/>
</a>
                </div>
            </div>
            </div>
        )
    }
}

module.exports = Resources
//ReactDOM.render(<RBlendsApp/>, document.getElementById('app'));
