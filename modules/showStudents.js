import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import {browserHistory} from 'react-router';
import {Modal, Button, FormGroup, form, FormControl, Panel} from 'react-bootstrap';

//class ShowStudents extends React.Component {


class StudentPanel extends React.Component{

    constructor(...args) {
        super(...args);
        this.state = {
            open: false
        };
    }





    render() {
        console.log('props', this.props)
        const {name, birthday, notes, words} = this.props
    return (<div><Button onClick={ ()=> this.setState({open: !this.state.open})} className="studentHeader"><span className="caret"></span> {name}
    </Button>

        <div>
            <Panel collapsible expanded={this.state.open}>
                <ul>
                    <li>Birthday: {birthday}
                    </li>
                    <li>Notes: {notes}
                    </li>
                    <li>Focus Words: {words}
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
                    return <StudentPanel {...student}/>
                })}

            </div>

        );
    }
}

module.exports = ShowStudents;