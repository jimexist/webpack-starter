var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var atImport = require('postcss-import');
var cssnano = require('cssnano');
var lost = require('lost');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/',
    filename: '[name].js'
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
        include: path.join(__dirname, 'src'),
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
}
