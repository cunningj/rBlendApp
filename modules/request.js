fetch('/users.html')
    .then(function (response) {
        return response.text()
    }).then(function (body) {
        document.body.innerHTML = body
    })

fetch('/users.json')
    .then(function (response) {
        return response.json()
    }).then(function (json) {
        console.log('parsed json', json)
    }).catch(function (ex) {
        console.log('parsing failed', ex)
    })

fetch('/users.json').then(function (response) {
    console.log(response.headers.get('Content-Type'))
    console.log(response.headers.get('Date'))
    console.log(response.status)
    console.log(response.statusText)
})

var form = document.querySelector('form')

fetch('/users', {
    method: 'POST',
    body: new FormData(form)
})

fetch('/users', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Hubot',
        login: 'hubot',
    })
})

