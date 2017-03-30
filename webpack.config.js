var path    = require('path');
var glob    = require('glob');
// var webpack = require('webpack');

module.exports = {
  entry: glob.sync('./handlers/*.ts').reduce(function(acc, item) {
    var obj = {};
    obj[path.basename(item, '.ts')] = item;
    return Object.assign(acc, obj);
  }, {}),

  target:  'node',
  devtool: 'source-map',

  module: {
    loaders: [
      {
        test:   /\.tsx?$/,
        loader: 'ts-loader',
      },

      {
        test:   /\.json$/,
        loader: 'json-loader',
      },
    ],
  },

  resolve: {
    extensions: [
      '.ts',
      '.js',
      '.tsx',
      '.jsx',
      '',
    ],
  },

  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin(),
  // ],

  output: {
    libraryTarget: 'commonjs',
    path:          path.join(__dirname, 'dist'),
    filename:      '[name].js',
  },
};
