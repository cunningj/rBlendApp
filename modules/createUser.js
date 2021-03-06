//Component creates new user
import React from 'react';
import ReactDOM from 'react-dom';
import {Modal, Button, FormGroup, form, FormControl, Panel, Alert} from 'react-bootstrap';
import 'whatwg-fetch';
import {browserHistory, Link} from 'react-router';



class CreateUser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            alertVisible: false
        };
    }


    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    submit() {
        this.createUser()
    }

    createUser() {
        var self = this;
        return fetch('/createUser', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: self.state.name,
                password: self.state.password
            })
        }).then(function (response) {
            console.log(response)
            return response.json()
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        }).then(function (response) {
            console.log("2nd response")
            console.log(response)
            if (response.success === true) {
                self.setState({alertVisible: true})
                //self.setState({showModal: false})
                //alert('User Created Successfully! Please Log In!');
            }
        })
    }

    showAlert(){
        if(this.state.alertVisible) {
            return (
                <Alert bsStyle="success" className="alertLog">
                    <p>User Created Successfully! Please Log In!</p>
                        <Button onClick={this.afterShowAlert.bind(this)}>OK</Button>
                </Alert>
            )
        }
    }

    afterShowAlert(){
        this.setState({showModal: false, alertVisible: false})
    }


    render() {
        var self = this;
        return (
            <div>
            <Link onClick = {this.open.bind(this)} className="createUser">New User?</Link>

            <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
<Modal.Header >
    <Modal.Title>Create User Account:</Modal.Title>
</Modal.Header>
<Modal.Body>
<FormGroup bsSize="large">
    <FormControl type="text" placeholder="Username"
                 onChange={e => this.setState({name: e.target.value})}/>
    <FormControl type="password" placeholder="Password"
                 onChange={e => this.setState({password: e.target.value})}/>
</FormGroup>
</Modal.Body>
<Modal.Footer className="modalAlert">
    <Button onClick={this.close.bind(this)}>Close</Button>
    <Button className="btn-info" onClick={this.submit.bind(this)}>Submit</Button>


    <div>{self.showAlert()}</div>


</Modal.Footer>
</Modal>
        </div>
        )
    }
}


module.exports = CreateUser;
