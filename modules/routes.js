import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Login from './login'
import Home from './home'
import ShowStudents from './showStudents'
import RequireLogin from './RequireLogin'
module.exports = (
    <Route path="/">
        <IndexRoute component={Login}/>
        <Route path="login" component={Login}/>
        <Route path="protected/" component={RequireLogin}>
            <Route path="home" component={Home}/>
            <Route path="api/showAllStudents" component={ShowStudents}/>
        </Route>
    </Route>
)