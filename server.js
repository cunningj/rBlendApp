import path from 'path'
import compression from 'compression'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './modules/routes'
import { Provider } from 'react-redux'
import store from './modules/redux/store'

var express = require("express");
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var cookieParser = require('cookie-parser');
var mongoose    = require('mongoose');

var config = require('./config'); // get our config file
var studentController = require('./modules/studentController');
var apiRoutes = require('./server/apiRoutes')(app)

var webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')
var webpackMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var compiler = webpack(webpackConfig)
var wpMiddleware = webpackMiddleware(compiler,
    {publicPath: webpackConfig.output.publicPath,
      contentBase: './modules',
      stats: {colors: true,
        timings: true,
        hash: false,
        chunks: false,
        chunkModules: false,
        modules: false}})
app.use(wpMiddleware)
app.use(webpackHotMiddleware(compiler))


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



// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});



// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);


