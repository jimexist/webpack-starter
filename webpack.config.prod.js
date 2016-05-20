const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.config.common');

module.exports = Object.assign({}, common, {
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
