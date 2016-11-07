//Webpack is a module bundler. It takes in a bunch of assets (ie. source, images, markup, CSS, ...)
// and turns that into something you can provide to the client web page.
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#eval-source-map',
  entry: [ 'whatwg-fetch', './index.js'],
  output: { path: __dirname + '/public', filename: 'bundle.js', publicPath:'/'},
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
