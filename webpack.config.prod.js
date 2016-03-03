var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var common = require('./webpack.config.common');

module.exports = _.merge({}, common, {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'src/index'),
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
});
