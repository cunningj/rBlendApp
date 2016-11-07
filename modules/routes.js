//Structure that react router enables us to create. Contains front end structure of entire web app.
//Login page is our main path and accessible to unauthorized users
//Created a new "protected" path with appframe component containing children
//All resources in the "protected" path require a valid JWT to be accessed

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Login from './login'
import Home from './home'
import Story from './story'
import Resources from './resources'
import MatchingGame from './matchingGame'
import ShowStudents from './showStudents'
import AppFrame from './appFrame'


module.exports = (
    <Route path="/">
        <IndexRoute component={Login}/>
        <Route path="login" component={Login}/>
        <Route path="protected/" component={AppFrame}>
                <Route path="home" component={Home}/>
                <Route path="story" component={Story}/>
                <Route path="resources" component={Resources}/>
                <Route path="matchinggame" component={MatchingGame}/>
        </Route>
    </Route>
)