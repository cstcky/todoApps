var path = require('path');
var webpack = require('webpack');
var { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: __dirname + '/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist/',
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'}, 
      {test: /\.vue$/, loader: 'vue-loader'},
      {test: /\.css$/, use: ['vue-style-loader', 'css-loader']}
    ] 
  },
  devServer: {
    contentBase: __dirname,
    filename: 'index.html',
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
    hot: true
  },
  plugins: [
    new VueLoaderPlugin() 
  ]
}
