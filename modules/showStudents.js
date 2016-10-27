import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import {browserHistory} from 'react-router';


class ShowStudents extends React.Component {
        render() {
            return (<div>
                <hr/>
                <div>
                    {this.props.students.map(students => <Student key={students._id} students={students} refreshStudents={this.props.fetch('/api/showAllStudents', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: null
            })
        }/>)
                    }
                </div>
            </div>)
        }
}

module.exports = ShowStudents;