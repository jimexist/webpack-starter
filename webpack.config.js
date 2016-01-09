var path         = require('path');
var autoprefixer = require('autoprefixer');
var precss       = require('precss');
var atImport     = require('postcss-import');
var cssnano      = require('cssnano');
var lost         = require('lost');

var config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: "[name].js"
  },
  resolve: {
    extensions: [
      "", ".js", ".jsx"
    ]
  },
  postcss: function() {
    return [lost, atImport, autoprefixer, precss, cssnano];
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015']
        },
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css?localIdentName=[name]-[local]-[hash:base64:5]!postcss'
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      }
    ]
  }
};

module.exports = config;
