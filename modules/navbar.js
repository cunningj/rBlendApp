import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import { Link } from 'react-router';
import {Navbar, Header, Toggle, Brand, MenuItem, NavItem, Collapse, NavDropdown, Nav, Button, Footer} from 'react-bootstrap';
import {connect} from 'react-redux'
import {logOut} from './redux/actions'

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setLogoutState: function () {
            dispatch(logOut)
        }
    }
}

const logoutConnector = connect(mapStateToProps, mapDispatchToProps)


class NavbarComponent extends React.Component {

    logout() {
        var self = this;
        fetch('/api/logout', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            console.log(response);
            return response.json()
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        }).then(function (response) {
            console.log('Logging on out', response)
            if (response.success === true) {
                self.props.setLogoutState();
                browserHistory.push('/login');
            }
        })
    }

    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">R-Blend App</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem><Link to="/protected/home">
                                <div className="glyphicon glyphicon-home"></div>
                                Home</Link></NavItem>
                            <NavItem ><Link to="/protected/story">
                            <div className="glyphicon glyphicon-book"></div>
                                Story</Link></NavItem>
                            <NavItem><Link to="/protected/matchinggame">
                                <div className="glyphicon glyphicon-th"></div>
                                Game</Link></NavItem>
                            <NavItem><Link to="/protected/resources">
                                <div className="glyphicon glyphicon-link"></div>
                                Resources</Link></NavItem>
                            <NavItem onClick={this.logout.bind(this)} href="#">
                                <div className="glyphicon glyphicon-log-out"></div>
                                Logout</NavItem>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {this.props.children}
            </div>
        )
    }
}

module.exports = logoutConnector(NavbarComponent);
