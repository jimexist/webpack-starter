const path = require('path');

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
  postcss: () => ([
    require('lost'),
    require('postcss-import'),
    require('autoprefixer'),
    require('precss'),
    require('cssnano')
  ]),
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
