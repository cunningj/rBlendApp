var express = require("express");
var app = express();

var webpack  = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var compiler = webpack(webpackConfig);
var wpMiddleware = webpackMiddleware(compiler,
									{publicPath: webpackConfig.output.publicPath,
										contentBase: "./src",
										stats: {colors:true,
												timings: true,
												 hash:false,
												 chunks:false,
												 chunkModules:false,
												 modules:false}});
app.use(wpMiddleware);
app.use(webpackHotMiddleware(compiler));

// routes ======================================================================
//require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
app.use(express.static('public'));

app.listen(8080);
