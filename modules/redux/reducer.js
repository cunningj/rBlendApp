//Redux reducer
//Manages state of user logging in or out

function reducer(state = initialState, action){
    switch(action.type){
        case 'logIn':
            return {loggedIn: true,
                    user:     action.user};
        case 'logOut':
            return {loggedIn: false};
        default:
            return state;
    }
}

var initialState = {}


module.exports = reducer;