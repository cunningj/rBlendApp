import { createStore } from 'redux'
import reducer from './reducer'
import Immutable from 'immutable'



module.exports = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());