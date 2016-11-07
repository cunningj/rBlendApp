//Component for showing students
import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import {browserHistory} from 'react-router';
import {Modal, Button, FormGroup, form, FormControl, Panel} from 'react-bootstrap';
import EditStudents from './editStudents'

//class ShowStudents extends React.Component {
class StudentPanel extends React.Component{

    constructor(...args) {
        super(...args);
        this.state = {
            open: false
        };
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





    render() {
        console.log('PROPS FROM SHOWSTUDENTS', this.props)
        const {_id, name, birthday, notes, words} = this.props
    return (<div><Button onClick={ ()=> this.setState({open: !this.state.open})} className="studentHeader"><span className="caret"></span> {name}
        <EditStudents loadStudents={this.props.loadStudents} _id={_id} name={name} birthday={birthday} words={words} notes={notes}/></Button>

        <div>
            <Panel collapsible expanded={this.state.open}>
                <ul>
                    <li>Date of Birth: {birthday}
                    </li>
                    <li>Target Words: {words}
                    </li>
                    <li>Notes: {notes}
                    </li>
                </ul>
            </Panel>
        </div>
    </div>)
    }
}

class ShowStudents extends React.Component {


    render() {
        var self = this;
        return (
            <div>
                {this.props.allStudents.map( student => {
                    return <StudentPanel loadStudents={this.props.loadStudents} {...student}/>
                })}

            </div>

        );
    }
}

module.exports = ShowStudents;