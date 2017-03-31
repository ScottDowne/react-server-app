require('habitat').load();
var webpack = require('webpack');
var Path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  entry: ['./dist/client.js','./less/index.less'],
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[id].chunk.js',
    path: Path.join('public')
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.json$/, loaders: ['json-loader'], exclude: ['node_modules'] },
      { test: /\.less$/, loader: ExtractTextPlugin.extract(
                    'css?sourceMap!less?sourceMap'
                ), exclude: ['node_modules'] }
    ],
    preLoaders: [
      { test: /\.jsx$/, loaders: ['eslint-loader'], exclude: ['node_modules'] }
    ]
  },
  eslint: {
    emitError: true,
    emitWarning: true
  },
  plugins: [
    new AssetsPlugin({
      path: Path.join(__dirname, "public")
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        APPLICATION_URI: process.env.APPLICATION_URI,
        OPTIMIZELY_ID: process.env.OPTIMIZELY_ID,
        OPTIMIZELY_ACTIVE: process.env.OPTIMIZELY_ACTIVE,
        FULL_SUBDOMAIN_FOR_COOKIE: process.env.FULL_SUBDOMAIN_FOR_COOKIE,
        FULL_SUBDOMAIN: process.env.FULL_SUBDOMAIN,
        NODE_ENV: process.env.NODE_ENV
      })
    }),
    //new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new ExtractTextPlugin("style.[hash].css", {
      allChunks: true
    })
  ]
};
