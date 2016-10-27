import Immutable from 'immutable'

function reducer(state = initialState, action){
    switch(action.type){
        case 'logIn':
            return {loggedIn: true}
        case 'logOut':
            return {loggedIn: false}
        default:
            return state;
    }
}

var initialState = {
    loggedIn: false
};

module.exports = reducer;