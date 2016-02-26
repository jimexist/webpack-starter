'use strict';

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.entry.main.unshift('webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server');

var compiler = webpack(config);

var server = new webpackDevServer(compiler, {
  inline: true,
  hot: true,
  publicPath: '/lib/',
  noInfo: false
});

server.listen(8080);
