import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Login from './login'
import Home from './home'
import Story from './story'
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
                <Route path="matchinggame" component={MatchingGame}/>
        </Route>
    </Route>
)