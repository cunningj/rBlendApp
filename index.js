//import Hello from './hello.jsx';
//import RBlendsApp from './rblendsapp.jsx';

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './modules/routes'
import store from './modules/redux/store'
import { Provider } from 'react-redux'

render(
    (<Provider store ={store} >
        <Router routes={routes} history={browserHistory}/>
        </Provider>),
    document.getElementById('app')
)
