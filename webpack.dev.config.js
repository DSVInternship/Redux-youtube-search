const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './src/js/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
    // publicPath: '/public/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  }
}
