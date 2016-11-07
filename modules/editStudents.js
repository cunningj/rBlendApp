//Component for editing and deleting students
import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import {browserHistory} from 'react-router';
import ShowStudents from './showStudents'
import {Modal, Button, FormGroup, form, FormControl, Panel} from 'react-bootstrap';

//class ShowStudents extends React.Component {
class EditStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showDeleteModal: false
        };
    }

    componentWillReceiveProps(newProps){
        this.setState({
            _id: newProps._id,
            name : newProps.name,
            birthday : newProps.birthday,
            words : newProps.words,
            notes : newProps.notes
        })

    }

    editStudents() {
        var self = this;
        return fetch('/api/editStudents', {
            method: 'PUT',
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: self.state._id,
                name: self.state.name,
                birthday: self.state.birthday,
                words: self.state.words,
                notes: self.state.notes
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
                self.setState({showModal: false});
            }
        })
    }

    deleteStudents() {
        var self = this;
        return fetch('/api/deleteStudents', {
            method: 'DELETE',
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: self.state._id
            })
        }).then(function (response) {
            console.log('FIRST THEN RESPONSE ' + response)
            return response.json()
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        }).then(function (response) {
            console.log("2nd response")
            console.log(response)
            if (response.success === true) {
                self.setState({showDeleteModal: false});
            }
        })
    }

    confirmDelete() {
        var answer = confirm('Are you sure you want to delete?');
        console.log('THIS IS THE ANSWER: ' + answer)
        if (answer === true){
            this.delete.bind(this)()
        }
    }

    delete() {
        this.deleteStudents()
            .then(()=> this.props.loadStudents())
    }

    submit() {
        this.editStudents()
            .then(()=> this.props.loadStudents())
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    closeDeleteModal() {
        this.setState({showDeleteModal: false});
    }

    openDeleteModal() {
        this.setState({showDeleteModal: true});
    }


    render() {
        console.log('PROPS FROM EDIT STUDENTS',this.props);
        const {_id, name, birthday, notes, words} = this.props
        return (<div>
                <div>
                    <div className="glyphicon glyphicon-edit" onClick={this.open.bind(this)}></div>
                    <div className="glyphicon glyphicon-trash" onClick={this.openDeleteModal.bind(this)}></div>
                </div>
                <div>
                    <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                        <Modal.Header >
                            <Modal.Title>Edit student information:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormGroup bsSize="large">
                                <FormControl type="text"  value={this.state.name}
                                             onChange={e => this.setState({name: e.target.value})}/>
                                <FormControl type="text"  value={this.state.birthday}
                                             onChange={e => this.setState({birthday: e.target.value})}/>
                                <FormControl type="text" value={this.state.words}
                                             onChange={e => this.setState({words: e.target.value})}/>
                                <FormControl type="text"  value={this.state.notes}
                                             onChange={e => this.setState({notes: e.target.value})}/>
                            </FormGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.close.bind(this)}>Close</Button>
                            <Button className="btn-info" onClick={this.submit.bind(this)}>Submit</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div>
                    <Modal show={this.state.showDeleteModal} onHide={this.closeDeleteModal.bind(this)}>
                        <Modal.Header >
                            <Modal.Title>Are you sure you want to delete <span className="nameStudent">' {this.props.name} '</span>?</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button onClick={this.closeDeleteModal.bind(this)}>Cancel</Button>
                            <Button className="btn-info" onClick={this.delete.bind(this)}>Delete</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>

        )
    }
}



module.exports = EditStudents;

