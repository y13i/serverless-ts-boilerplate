// Some of Webpack 2 syntaxes is not supported by serverless-webpack@1.0.0-rc.3
// See https://github.com/elastic-coders/serverless-webpack/issues/113

const path = require("path");
const glob = require("glob");

module.exports = {
  entry: glob.sync("./handlers/*.ts").reduce((acc, item) => {
    const obj = {};
    obj[path.basename(item, ".ts")] = item;
    return Object.assign(acc, obj);
  }, {}),

  target:  "node",
  devtool: "source-map",

  module: {
    loaders: [
      {
        test:   /\.tsx?$/,
        loader: "ts-loader",
      },

      {
        test:   /\.json$/,
        loader: "json-loader",
      },
    ],
  },

  resolve: {
    extensions: [
      ".ts",
      ".js",
      ".tsx",
      ".jsx",
      "",
    ],
  },

  output: {
    libraryTarget: 'commonjs',
    path:          path.join(__dirname, 'dist'),
    filename:      '[name].js',
  },
};
