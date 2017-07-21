const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: path.join(__dirname, 'app', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app-bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    root: path.join(__dirname,'app'),
    extensions: ['', '.scss', '.css', '.js', '.json']
  },
  module: {
    loaders: [{
      test: /(\.js|\.jsx)$/,
      loader: 'babel',
      include: path.join(__dirname, 'app'),
    }, {
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.(scss|css)$/,
      loader: 'style!css?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass',
      include: path.join(__dirname, 'app'),
    },{ 
      test: /\.png$/,
      loader: "file"
    }, {
      test: /\.(scss|css)$/,
      loader: 'style!css!postcss!sass',
      exclude: path.join(__dirname, 'app'),
    }]
  },
  postcss: function () {
    return [precss, autoprefixer];
  },
  sassLoader: {
    data: '@import "' + path.resolve(__dirname, 'app/defaultstyles.scss') + '";',
    includePaths: [path.resolve(__dirname, "./node_modules")]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: false,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
