var webpack = require('webpack');

module.exports = {

  // Set 'context' for Rails Asset Pipeline
  context: __dirname + '/app/assets/javascripts',

  entry: {
    App: [
      'webpack-dev-server/client?http://localhost:8080/assets/',
      'webpack/hot/only-dev-server',
      './app.js'
    ]
  },

  output: {
    filename: '[name]_wp_bundle.js', // Will output App_wp_bundle.js
    path: __dirname + '/app/assets/javascripts', // Save to Rails Asset Pipeline
    publicPath: 'http://localhost:8080/assets' // Required for webpack-dev-server
  },

  // Require the webpack and react-hot-loader plugins
  plugins: [  
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    // Load the react-hot-loader
    loaders: [ { test: /\.jsx?$/, loaders: ['react-hot', 'jsx-loader'] } ]
  }

};