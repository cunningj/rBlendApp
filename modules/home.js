import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.js';
import {browserHistory} from 'react-router';
import {Modal, Button, FormGroup, form, FormControl, Panel} from 'react-bootstrap';
import ShowStudents from './showStudents'
import {connect} from 'react-redux'
//import Logout from './logout.jsx';

function mapStateToProps(state){
    return {
        user: state.user
    }

}


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false,
                      allStudents: []};
    }

    componentWillMount(){
        this.loadStudents();
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    submit(){
        this.addStudent()
            .then(()=> this.loadStudents())
    }

    addStudent() {
        var self = this;
        return fetch('/api/newStudents', {
            method: 'POST',
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

    loadStudents(){
        var self = this;
        fetch('/api/showAllStudents', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: null
        }).then(function(response){
            console.log(response)
            return response.json()
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        }).then(function (response) {
            self.setState({allStudents:response});
        })
    }


    render() {
        console.log("YO PROPS BE HERE")
        return (<div>
                <div>
                    <div>Welcome, {this.props.user}!</div>
                    <hr/>

                    <Button
                        className="addStudents"
                        bsSize="large"
                        bsStyle="default"
                        onClick={this.open.bind(this)}>
                        Add Students
                    </Button>

                    <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                        <Modal.Header >
                            <Modal.Title>Add student information:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormGroup bsSize="large">
                                <FormControl type="text" placeholder="Name"
                                             onChange={e => this.setState({name: e.target.value})}/>
                                <FormControl type="text" placeholder="Birthday"
                                             onChange={e => this.setState({birthday: e.target.value})}/>
                                <FormControl type="text" placeholder="Words"
                                             onChange={e => this.setState({words: e.target.value})}/>
                                <FormControl type="text" placeholder="Notes"
                                             onChange={e => this.setState({notes: e.target.value})}/>
                            </FormGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.close.bind(this)}>Close</Button>
                            <Button onClick={this.submit.bind(this)}>Submit</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div>
                    <ul>
                <ShowStudents allStudents={this.state.allStudents}/>
                    </ul>
                </div>
            </div>
        )
    }
}

module.exports = connect(mapStateToProps)(Home);
//ReactDOM.render(<RBlendsApp/>, document.getElementById('app'));
