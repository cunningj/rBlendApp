import { createStore } from 'redux'
import reducer from './reducer'
import Immutable from 'immutable'



module.exports = createStore(reducer);