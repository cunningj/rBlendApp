import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.js';
import {browserHistory} from 'react-router';
import {Modal, Button, FormGroup, form, FormControl} from 'react-bootstrap';

//import Logout from './logout.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    render() {
        return (<div>
                <div>

                    <Button
                        bsStyle="primary"
                        bsSize="large"
                        onClick={this.open.bind(this)}>
                        Launch demo modal
                    </Button>

                    <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
      <h2>hello</h2>
                            <FormGroup bsSize="large">
                                <FormControl type="text" placeholder="Name" />
                                <FormControl type="text" placeholder="Birthday" />
                                <FormControl type="text" placeholder="Gender" />
                                <FormControl type="text" placeholder="Words" />
                                <FormControl type="text" placeholder="Notes" />
                            </FormGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.close.bind(this)}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        )
    }
}

module.exports = Home;
//ReactDOM.render(<RBlendsApp/>, document.getElementById('app'));
