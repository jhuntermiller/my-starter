const path = require('path');

var webpackConfig = require('../webpack.config.js');
// Configure Karma-specifc webpack settings
webpackConfig.entry = {};
webpackConfig.sassLoader = {
  data: '@import "' + path.resolve(__dirname, '../app/styles/_defaults.scss') + '";',
  includePaths: [path.resolve(__dirname, "./node_modules")]
};
webpackConfig.externals = {
  'jsdom': 'window',
  'cheerio': 'window',
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true,
  'react/addons': true
};
webpackConfig.devtool = 'inline-source-map';


module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],

    singleRun: true,

    // which karma frameworks do we want integrated
    frameworks: ['mocha', 'chai'],

    reporters: ['spec'],

    // include some polyfills for babel and phantomjs
    files: [
      '../node_modules/babel-polyfill/dist/polyfill.js',
      '../node_modules/phantomjs-polyfill/bind-polyfill.js',
      '../app/**/*spec.js' // specify files to watch for tests
    ],
    preprocessors: {
      ['../app/**/*.js']: ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
  });
};
