const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.config.common');

module.exports = Object.assign({}, common, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'src/index'),
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
