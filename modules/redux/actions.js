//Redux actions for login and logout

function logIn(user) {
    return {
        type: 'logIn',
        user
    }
}

const logOut = {
    type: 'logOut'
}

module.exports = {logIn, logOut}