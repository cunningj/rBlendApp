import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Login from './login'
import Home from './home'
//import Therapist from './therapist'

module.exports = (
    <Route path="/">
        <IndexRoute component={Login}/>
        <Route path="login" component={Login}/>
        <Route path="api/home" component={Home}/>
    </Route>
)