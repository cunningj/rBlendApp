
// LOGIN ===============================
// =====================================
// show the login form
/*app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/api/user', // redirect to the secure profile section
    failureRedirect : '/api/user', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

/*app.post('/api/sendTweet', function(req, res){
    sendTweet({status: req.body.status}, function(error){
            res.status(500)
            res.json({message: 'tweet failed'})
        },
        function(data){
            res.json(data)
        })
})*/