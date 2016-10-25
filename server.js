import path from 'path'
import compression from 'compression'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './modules/routes'

var express = require("express");
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var cookieParser = require('cookie-parser');
var mongoose    = require('mongoose');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var User   = require('./modules/user'); // get our mongoose model

//var webpack  = require('webpack');
//var webpackConfig = require('./webpack.config.js');
//var webpackMiddleware = require('webpack-dev-middleware');
//var webpackHotMiddleware = require('webpack-hot-middleware');
//var compiler = webpack(webpackConfig);
//var wpMiddleware = webpackMiddleware(compiler,
//									{publicPath: webpackConfig.output.publicPath,
//										contentBase: "./src",
//										stats: {colors:true,
//												timings: true,
//												 hash:false,
//												 chunks:false,
//												 chunkModules:false,
//												 modules:false}});
//app.use(wpMiddleware);
//app.use(webpackHotMiddleware(compiler));

app.use(cookieParser());


app.use(compression());
// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// routes ======================================================================
//require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
//app.use(express.static('public'));

// basic route
//app.get('/', function(req, res) {
//    res.send('Hello! The API is at http://localhost:' + port + '/api');
//});





app.get('/setup', function(req, res) {

//create a sample user
  var josh = new User({
    name: 'Josh Quick',
    password: 'kool',
    admin: true
  });

  // save the sample user
  josh.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});

// API ROUTES -------------------

// get an instance of the router for api routes
var apiRoutes = express.Router();

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/authenticate', function(req, res) {
  // find the user
  User.findOne({
    name: req.body.name
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresIn: 1440 // expires in 24 hours
        });

        //add cookie to header
        //res.writeHead(200);
        res.cookie('access_token', token, {maxAge:300000});

        //TO DO: for logout route make: 'Set-Cookie': ////

        // return the information including token as JSON
        res.end(JSON.stringify({
          success: true,
          message: 'Enjoy your token!',
          token: token,
          user: req.body.name
        }));
      }
    }
  });
});

//logout route
apiRoutes.post('/logout', function(req, res) {
        //add cookie to header
        res.writeHead(200, {'Set-Cookie': ""});
        // return the information including token as JSON
        res.end(JSON.stringify({
          success: false,
          message: 'Logged out!'
        }));
    });

//route middleware to verify a token
apiRoutes.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token =req.cookies.access_token ||req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
});

// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // hey we made it!
      const appHtml = renderToString(<RouterContext {...props}/>);
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
});


function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>RBlends for RMens</title>
    <link rel=stylesheet href=/index.css>
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="/css/customStyles.css" rel="stylesheet">
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
}

// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);


